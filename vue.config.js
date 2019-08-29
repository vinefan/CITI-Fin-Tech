module.exports = {
    pages: {
        index: {
            entry: 'src/entry/main.js',
            template: 'public/index.html',
            filename:  'index.html',
        },
        insure: {
            entry: 'src/entry/insure.js',
            template: 'public/insure.html',
            filename: 'insure.html'
        },
        check: {
            entry: 'src/entry/check.js',
            template: 'public/check.html',
            filename: 'check.html'
        },
        appeal: {
            entry: 'src/entry/appeal.js',
            template: 'public/appeal.html',
            filename:'appeal.html'
        }
        

    }
}