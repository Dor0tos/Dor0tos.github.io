import { supabase } from './supabaseClient'

class drtDataBase {
  /* Константы */
  tagsTableName = 'tags'
  projectsTableName = 'projects'
  newsTableName = 'news'
  articlesTableName = 'articles'

  constructor() {
    this.tags = this._getTags()
  }

  /* Cтатичная часть */

  /* Информация о тегах нужна почти в любой части сайта, поэтому она загружается
  в объект при его инициализации и хранятся всё время жизни объекта */

  async _getTags() {
    const { data } = await supabase.from(this.tagsTableName).select()
    return data
  }

  getTagsData() {
    return this.tags
  }

  /* Динамическая часть | Таблицы */

  // Получение доступа к чтению всех проектов
  async getProjects() {
    const { data } = await supabase.from(this.projectsTableName).select()
    return data
  }

  // Получение доступа к чтению проектов по ID тега
  async getProjectsByTag(tag) {
    const { data } = await supabase.from(this.projectsTableName).select().eq('tag', tag)
    return data
  }

  async getProjectsSorted() {
    let result = []

    this.getTagsData().then((tagsArray) => {
      tagsArray.forEach(async (el) => {
        let prj = await this.getProjectsByTag(el.tag_id)

        result.push({
          tag: el,
          projects: prj
        })
      })
    })

    return result
  }

  // Получение доступа к чтению всех новостей
  async getNews() {
    const { data } = await supabase.from(this.projectsTableName).select()
    return data
  }

  // Получение доступа к чтению статьи по ID
  async getArticleById(id) {}

  /* Динамическая часть | Бакиты */

  // Получение данных из Бакита
  // ???
}

let drtDB = new drtDataBase()

export { drtDB }
