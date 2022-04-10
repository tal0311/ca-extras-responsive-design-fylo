import { userService } from '../../service/user.service'

export const userStore = {
  strict: true,
  state: {
    users: null,
    activeUser: null,
  },
  getters: {
    activeUser(state) {
      return state.activeUser
    },
  },
  mutations: {
    setActiveUser(state, { newLogin }) {
      state.activeUser = newLogin
    },
  },
  actions: {
    async loadUsers() {
      try {
        const users = await userService.getUsers()
      } catch (error) {
        console.log(error)
      }
    },
    async login(context, { userCard }) {
      try {
        const newLogin = await userService.login(userCard)
        context.commit({
          type: 'setActiveUser',
          newLogin,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async loadActiveUser(context) {
      try {
        const newLogin = await userService.getLoggedinUser()
        if (newLogin) {
          context.commit({
            type: 'setActiveUser',
            newLogin,
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
