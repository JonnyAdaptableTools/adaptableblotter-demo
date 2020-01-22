const fs = require('fs');

function netlifyPlugin(conf) {
  return {
    // Plugin Name
    name: 'next-cache',
    // async onGetCache({ utils }) {
    //   if (fs.existsSync('./.next')) {
    //     return;
    //   }
    //   await utils.cache.restore('./.next');
    // },
    // // Cache file/directory for future builds.
    // // Does not do anything if:
    // //  - the file/directory does not exist locally
    // //  - the file/directory is already cached and its contents has not changed
    // //    If this is a directory, this includes children's contents
    // async onSaveCache({ utils }) {
    //   if (!fs.existsSync('./.next')) {
    //     return;
    //   }
    //   await utils.cache.save('./.next');
    // },
    // Hook into lifecycle
    onEnd: () => {
      console.log('build finished, site deployed! 🚀');
    },
  };
}

module.exports = netlifyPlugin;
