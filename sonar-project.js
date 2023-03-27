const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://44.201.54.156:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Nodejs-Application-example',
	    'sonar.projectKey':'Nodejs-Application-example',
	    'sonar.login': 'sqp_6a0f0d3f4a56f740c3ac7b017816552fab01def3',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
       },
}, () => {});
