pipeline {
    agent any

    tools {nodejs "node"}
    
    stages {
        stage('cypress parallel test suite') {
            paralles{
                stage('Slave Node1'){
                    agent{
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/viveka90/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run run-autostore-test-dashboard-parallel'
                    }
                }
                stage('Slave Node2'){
                    agent{
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/viveka90/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run run-autostore-test-dashboard-parallel'
                    }
                }
            }
        }
    }
}