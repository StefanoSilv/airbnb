pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/StefanoSilv/airbnb', branch: 'blueocean')
        echo 'Starting...'
      }
    }

    stage('error') {
      steps {
        sh '''npm install

//Need to install nodejs plugin first'''
      }
    }

  }
}