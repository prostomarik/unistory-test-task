<template>
  <div class="ma-10">
    <h1 class="mb-10">Блог</h1>

    <div class="card-desk">

      <v-card v-for="index in 6" :key="index" class="py-3">
        <v-card-text>
          <p class="text-h5 text--primary">Заголовок</p>
          <div class="text--primary">
            Контент
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary mx-auto px-4">Подробнее</v-btn>
        </v-card-actions>
      </v-card>

    </div>

    <v-btn class="mt-10" color="primary">Добавить</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Blog'
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
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
