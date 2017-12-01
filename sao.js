const superb = require('superb')
var fs = require('fs');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my ${superb()} project`
    },
    pageName: {
      message: 'How is your page name with lower case prefix?',
      default: `xxxWidget`
    },
    PageName: {
      message: 'How is your page name with upper case prefix?',
      default: `XxxWidget`
    },
    username: {
      message: 'What is your GitHub username?',
      default: ':gitUser:',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      default: ':gitEmail:',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    }
  },
  move: {
    'gitignore': '.gitignore',
  },
  move(answers) {
    return {
      'src/app/components/pageWidget/PageWidget.js': 'src/app/components/pageWidget/'.concat(capitalizeFirstLetter(answers.PageName),'.js'),
      'src/app/views/pageWidget/PageWidget.js': 'src/app/views/pageWidget/'.concat(capitalizeFirstLetter(answers.PageName),'.js'),
    }
  },
  showTip: true,
  gitInit: true,
  installDependencies: true,
  post(context) {
    fs.rename('src/app/components/pageWidget', 'src/app/components/'.concat(context.answers.pageName), function (err) {
if (err) throw err;
});
fs.rename('src/app/views/pageWidget', 'src/app/views/'.concat(context.answers.pageName), function (err) {
if (err) throw err;
});
  }
}
