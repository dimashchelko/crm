<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @created="addNewCategory"></CategoryCreate>
        <CategoryEdit
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories">
        </CategoryEdit>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'
export default {
  name: 'categories',
  data: () => ({
    categories: [],
    updateCount: 0
  }),
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
  },
  components: {
    CategoryCreate, CategoryEdit
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    },
    updateCategories (category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>
