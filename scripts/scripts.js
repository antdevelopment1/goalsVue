var app = new Vue({
    el: "#vueGoalApp",
    data: {
        message: 'Hello Vue!',
        titleMessage: 'Title Message Vue!!!!!',
        isTextDisplayed: true,
        items: {1: {name: "john"}, 2: {name: "jen"}, 3:{name: "jasmine"}},
        user: {
          name: 'Filip Jerga',
          id: '-Aj34jknvncx98812',
        },
        goals: {
          '1546968934': {
            title: 'Learn Vue.js',
            notes: 'I started today and it was not good.',
            progress: 0,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391
          },
          '1546969212': {
            title: 'Read Witcher Books',
            notes: 'These books are super nice',
            progress: 0,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391
          }
        },
        categories: {
          '1546969049': {text: 'books'},
          '1546969225': {text: 'movies'}
        }
      },
      methods: {
        toggleTextDisplay() {
          this.isTextDisplayed = !this.isTextDisplayed
        }
      }
});