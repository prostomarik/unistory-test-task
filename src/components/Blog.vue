<template>
  <div class="ma-10">
    <h1 class="mb-10">Блог</h1>

    <div class="card-desk">
      <v-card v-for="post in POSTS" :key="post.id" class="pa-5">
        <v-card-text>
          <p class="text-h5 text--primary">{{ post.title }}</p>
          <div class="text--primary text-left">
            {{ post.content }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary mx-auto px-4" @click="openPost(post.id)" text>Подробнее</v-btn>
        </v-card-actions>
      </v-card>

      <h3 v-if="!POSTS.length">Записей нет</h3>
    </div>

    <v-dialog v-model="dialog" persistent width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="add-post" color="blue darken-3" v-bind="attrs" v-on="on" dark>
          <v-icon class="mr-1" aria-hidden="false">
            mdi-plus
          </v-icon>
          Добавить
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Добавить новость</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-text-field v-model="title" label="Заголовок" type="text" required/>
            <v-textarea v-model="content" label="Контент" type="text" required/>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" text @click="dialog = false">Закрыть</v-btn>
          <v-btn color="primary" text @click="addPost()">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Blog',

  data() {
    return {
      dialog: false,

      title: null,
      content: null
    }
  },

  computed: {
    ...mapGetters(['POSTS'])
  },

  methods: {
    ...mapMutations([
      'ADD_POST'
    ]),

    addPost() {
      const post = {
        // create uniq id by using milliseconds
        id: (new Date()).getTime(),
        title: this.title,
        content: this.content
      }

      this.ADD_POST(post)
      this.dialog = false

      this.title = null
      this.content = null
    },

    openPost(id) {
      this.$router.push(`/blog/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.card-desk {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  max-width: 1400px;
  margin: 0 auto;

  .v-card {
    width: 400px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    div {
      display: -webkit-box;
      -webkit-line-clamp: 7;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.add-post {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.v-btn:focus::before {
  opacity: 0 !important;
}
</style>
