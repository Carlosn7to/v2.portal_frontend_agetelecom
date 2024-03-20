import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Router from "@/router";
export default createStore({
  state: {
    user: {
      name: '',
      groups: ['user', 'management']
    },
    system: {
      security: {
        authenticated: true
      },
      cookie: {
        keepConnected: false
      },
      page: {
        title: 'Página inicial',
        subtitle: 'Navegue pelas categorias e explore o conteúdo do portal.'
      },
      theme: {
        colors: {
          highLightColor: 'linear-gradient(90deg, #FFB600 -10.98%, #F93822 150.68%)',
          highLightColorFocus: '#0F297DFF',
          highLightColorSvg: '#FFB600FF',
          highLightColorBorder: '#FFB600FF',
          highLightColorText: '#FFB600FF',
        },
        alerts: {
          success: {
            color: '#4CAF50',
            text: '#fff',
            icon: 'mdi-check-circle'
          },
          info: {
            color: '#2196F3',
            text: '#000',
            icon: 'mdi-information'
          },
          warning: {
            color: '#FFC107',
            text: '#fff',
            icon: 'mdi-alert'
          },
          danger: {
            color: '#F44336',
            text: '#fff',
            icon: 'mdi-alert-circle'
          },
          unset: {
            color: '#9E9E9E',
            text: '#000',
            icon: 'mdi-alert-circle'
          }
        },
        menu: {
          itemsHighlight: {
            background: '#0F297D20',
            text: '#0F297D',
            svg: '#0F297D'
          },
          items: {
            background: '#fff',
            text: '#383448',
            svg: '#383448'
          }
        },
        dark: false,
        lightTheme: {
          structureColors: {
            background: '#EDF1FA',
            backgroundSecondary: '#fff',
            highlight: 'linear-gradient(90deg, #FFB600 -10.98%, #F93822 150.68%)',
            highlightHover: '#0F297DFF',
            highlightBorder: '#FFB600FF',
            highlightSvg: '#FFB600FF',
            border: '#cccccc40',
            shadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
            text: {
              title: '#333',
              subtitle: '#555',
              description: '#666',
              highlight: '#0F297DFF'
            },
            icons: {
              background: '',
              backgroundHover: '',
              icon: '',
            },
            menu: {
              groupColor: '#999',
              groupIconColor: '#999',
              icon: '#666',
              iconHover: '#000',
              text: '#777',
              textHover: '#000',
              itemBackground: '#0F297DFF',
              itemBackgroundHover: '#D1E3F4',
              itemBackgroundActive: '#D1E3F4',
              itemTextActive: '#2D9CDB',
              itemIconActive: '#2D9CDB',
              itemIconBorderActive: '#2D9CDB',
              iconBackgroundActive: 'transparent',
            },
            header: {
              itemBackground: '#D1E3F4',
              itemBackgroundHover: '#0F297DFF',
              icon: '#2D9CDB',
              iconHover: '#0F297DFF',
              text: '#666',
              textHover: '#0F297DFF',
            },
            alert: {
              warning: {
                border: 'red',
                label: 'red',
                text: 'red',
                background: '#ff000020'
              }
            },
            button: {
              backgroundColor: '#2D9CDB',
              text: '#ffffff',
              border: '#2D9CDB'
            }

          }
        },
        darkTheme: {}

      },
      state: {
        loading: false,
        modal: false
      }
    }
  },
  getters: {
    user: state => state.user,
    system: state => state.system
  },
  mutations: {
    setUserName(state, user) {
      state.user.name = user
    },
    setCookieKeepConnected(state, keepConnected) {
      state.system.cookie.keepConnected = keepConnected
    },
    setAuthenticated(state, authenticated) {
      state.system.security.authenticated = authenticated
    },
    activeLoading(state, loading) {
      state.system.state.loading = loading
    },
    setPageInfo(state, {title, subtitle}) {
      state.system.page.title = title
      state.system.page.subtitle = subtitle
    },
    activeModal(state, modal) {
        state.system.state.modal = modal
    }
  },
  actions: {
    logout({ commit }) {
      commit('setUserName', '')
      commit('setAuthenticated', false)
      Router.replace('/')
    },
    validateToken({ commit }, {token}) {

      if(token === '' || token === undefined) {
        commit('setAuthenticated', false)
      }
    }
  },
  modules: {

  },
  plugins: [createPersistedState()]
})
