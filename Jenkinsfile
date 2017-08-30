pipeline {
    agent {
        docker { image 'node:6-alpine' }
    }
    stages {
        stage('Install Angular') {
            steps {
                sh 'mkdir ~/.npm-global'
                sh "npm config set prefix '~/.npm-global'"
                sh 'export PATH=~/.npm-global/bin:$PATH'
                sh 'npm install -g @angular/cli'
            }
        }
        stage('Install Packages') {
            steps {
                sh 'npm install --quiet'
            }
        }    
        stage ('Build'){
            steps{
                sh 'npm run ng build --target=production --environment=prod'
            }
        }  
        stage ('Upload to S3'){
            steps{
                withAWS(credentials:'ealberto-aws-id') {
                    s3Delete(bucket:'www.erwindev.com', path:'/')
                    s3Upload(file:'dist', bucket:'www.erwindev.com', path:'')
                }     
            }      
        }                  
    }
}