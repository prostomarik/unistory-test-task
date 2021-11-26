<template>
  <v-container>
    <div class="d-flex justify-space-between my-5">
      <span class="text-h5">Запись: <b>{{ post.title }}</b></span>
      <v-btn color="primary" @click="goBack()">Назад</v-btn>
    </div>

    <v-text-field v-model="post.title" label="Заголовок" type="text" required/>
    <v-textarea v-model="post.content" label="Контент" type="text" required/>

    <v-btn color="red" text @click="deletePost()">Удалить</v-btn>
    <v-btn color="primary" text @click="savePost()">Сохранить</v-btn>
  </v-container>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

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
      this.post = this.POSTS.find(post => post.id === +postId)
    },

    goBack() {
      this.$router.push('/blog')
    },

    deletePost() {
      this.DELETE_POST(this.post.id)
      this.$router.push('/blog')
    },

    savePost() {
      this.EDIT_POST(this.post)
      this.$router.push('/blog')
    }
  }
}
</script>