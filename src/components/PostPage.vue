<template>
  <v-container>
    <div class="d-flex justify-space-between my-5">
      <span class="text-h5">Запись: <b>{{ post.title }}</b></span>
      <v-btn color="primary" @click="goBack()">Назад</v-btn>
    </div>

    <v-text-field v-model="post.title" label="Заголовок" type="text" required/>
    <v-textarea v-model="post.content" label="Контент" type="text" required/>

    <v-dialog v-model="dialog" width="300px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" text v-bind="attrs" v-on="on">Удалить</v-btn>
      </template>

      <v-card class="pa-4">
        <v-card-title class="text-h5 justify-center mb-4">
          Удалить?
        </v-card-title>

        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">Нет</v-btn>

          <v-spacer />

          <v-btn color="primary" text @click="deletePost()">Да</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn color="primary" text @click="savePost()">Сохранить</v-btn>
  </v-container>
</template>

<script>
import _ from 'lodash'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "PostPage",

  data() {
    return {
      dialog: false,

      post: {}
    }
  },

  computed: {
    ...mapGetters(['POSTS'])
  },

  created() {
    this.getPostById()
  },

  methods: {
    ...mapMutations([
      'DELETE_POST',
      'EDIT_POST'
    ]),

    getPostById() {
      const postId = this.$route.params.id
      this.post = this.POSTS.find(post => post.id === +postId) ?? {}

      if (_.isEmpty(this.post)) {
        this.goBack()
      }
    },

    goBack() {
      this.$router.push('/blog')
    },

    deletePost() {
      this.DELETE_POST(this.post.id)
      this.dialog = false
      this.goBack()
    },

    savePost() {
      this.EDIT_POST(this.post)
      this.goBack()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn:focus::before {
  opacity: 0 !important;
}
</style>
