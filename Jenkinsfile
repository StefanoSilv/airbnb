pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/StefanoSilv/airbnb', branch: 'blueocean')
        echo 'Starting...'
      }
    }

    stage('') {
      steps {
        sh 'npm install'
      }
    }

  }
}