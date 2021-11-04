import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/auth/Login.vue')
const Index = () => import('../views/management/Index.vue')
const Accounts = () => import('../views/management/account/Account.vue')
const Settings = () => import('../views/management/Settings.vue')
const Reviews = () => import('../views/management/Reviews.vue')
const Dashboard = () => import('../views/management/Dashboard.vue')
const NewAccount = () => import('../views/management/account/NewAccount.vue')
const Department = () => import('../views/management/department/Department.vue')
const Organization = () => import('../views/management/organization/Organization.vue')
const Permission = () => import('../views/management/permissions/Permission.vue')
// const AdminUpdates = () => import('../views/management/update/Updates.vue')
// const NewAdminUpdate = () => import('../views/management/update/NewUpdate.vue')
const AccountUpdate = () => import('../views/management/account/AccountUpdate.vue')
const UniversityInfo = () => import('../views/management/university/UniversityInfo.vue')
const NewSchoolOfficial = () => import('../views/management/university/NewUniversityOfficial.vue')
const UpdateSchoolOfficial = () => import('../views/management/university/UpdateUniversityOfficial.vue')
const TelDirectory = () => import('../views/management/university/TelDirectory.vue')
const GoalsandObjectives = () => import('../views/management/university/GoalsandObjectives.vue')

const Courses = () => import('../views/management/university/course/Courses.vue')
const NewCourse = () => import('../views/management/university/course/NewCourse.vue')
const UpdateCourse = () => import('../views/management/university/course/UpdateCourse.vue')

const Faqs = () => import('../views/management/Faqs.vue')
const User = () => import('../views/user/Index.vue')
const Post = () => import('../views/user/Post.vue')
const DepartmentOrganization = () => import('../views/user/organization/Organization.vue')
const CreatePost = () => import('../views/user/post/NewPost.vue')
const UpdatePost = () => import('../views/user/post/UpdatePost.vue')
const UserDashboard = () => import('../views/user/Dashboard.vue')
const Members = () => import('../views/user/Members.vue')
const UserSettings = () => import('../views/user/Settings.vue')

//OSA - ROUTES
const OSAFAQs = () => import('../views/user/osa/FAQs.vue')
const OSATelDirectory = () => import('../views/user/osa/TelDirectory.vue')
const OSAPost = () => import('../views/user/osa/Posts.vue')
const OSAOrganization = () => import('../views/user/osa/Organization.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { hasUser: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
    meta: { hasUser: true }
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "reset" */ '../views/auth/ResetPassword.vue'),
    meta: { hasUser: true }
  },
  {
    path: '/account/reset',
    name: 'NewPassword',
    component: () => import(/* webpackChunkName: "newpassword" */ '../views/auth/NewPassword.vue'),
    meta: { hasUser: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Index,
    meta: { isAdmin: true, requiresLogin: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        components: {
          dashboard: Dashboard
        }
      },
      {
        path: 'organization',
        name: 'organization',
        components: {
          organization: Organization
        }
      },
      {
        path: 'permission',
        name: 'permission',
        components: {
          permission: Permission
        }
      },
      {
        path: 'department',
        name: 'department',
        components: {
          department: Department
        }
      },
      // {
      //   path: 'admin/updates',
      //   name: 'adminupdates',
      //   components: {
      //     adminupdates: AdminUpdates
      //   }
      // },
      // {
      //   path: 'admin/updates/new',
      //   name: 'newadminupdate',
      //   components: {
      //     newadminupdate: NewAdminUpdate
      //   }
      // },
      {
        path: 'accounts',
        name: 'accounts',
        components: {
          accounts: Accounts
        }
      },
      {
        path: 'account/new',
        name: 'newaccount',
        components: {
          newaccount: NewAccount
        }
      },
      {
        path: 'accounts/update/:slug',
        name: 'accountupdate',
        components: {
          accountupdate: AccountUpdate
        }
      },
      {
        path: 'settings',
        name: 'settings',
        components: {
          settings: Settings
        }
      },
      {
        path: 'reviews',
        name: 'reviews',
        components: {
          review: Reviews
        }
      },
      {
        path: 'faqs',
        name: 'faqs',
        components: {
          faqs: Faqs
        }
      },
      {
        path: 'goalsandobjectives',
        name: 'goalsandobjectives',
        components: {
          goalsandobjectives: GoalsandObjectives
        }
      },
      {
        path: 'teldirectory',
        name: 'teldirectory',
        components: {
          teldirectory: TelDirectory
        }
      },
      {
        path: 'courses',
        name: 'courses',
        components: {
          courses: Courses
        }
      },
      {
        path: 'courses/new',
        name: 'newcourse',
        components: {
          newcourse: NewCourse
        }
      },
      {
        path: 'courses/update',
        name: 'updatecourse',
        components: {
          updatecourse: UpdateCourse 
        }
      },
      {
        path: 'universityinfo',
        name: 'universityinfo',
        components: {
          universityinfo: UniversityInfo
        }
      },
      {
        path: 'official/new',
        name: 'newofficial',
        components: {
          newofficial: NewSchoolOfficial
        }
      },
      {
        path: 'official/update/:slug',
        name: 'updateofficial',
        components: {
          updateofficial: UpdateSchoolOfficial
        }
      },
      {
        path: '/',
        redirect: {name: 'dashboard'}
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: { isUser: true, requiresLogin: true },
    children: [
      {
        path: 'post',
        name: 'post',
        components: {
          post: Post
        }
      },
      {
        path: 'department/organization',
        name: 'deporganization',
        components: {
          deporganization: DepartmentOrganization
        }
      },
      {
        path: 'post/create',
        name: 'createpost',
        components: {
          createpost: CreatePost
        }
      },
      {
        path: 'post/update',
        name: 'updatepost',
        components: {
          updatepost: UpdatePost
        }
      },
      {
        path: 'dashboard',
        name: 'userdashboard',
        components: {
          userdashboard: UserDashboard
        }
      },
      {
        path: 'members',
        name: 'members',
        components: {
          members: Members
        }
      },
      {
        path: 'settings',
        name: 'usersettings',
        components: {
          usersettings: UserSettings
        }
      },
      {
        path: 'faqs',
        name: 'faqs',
        components: {
          osafaqs: OSAFAQs
        }
      },
      {
        path: 'directory',
        name: 'directory',
        components: {
          directory: OSATelDirectory
        }
      },
      {
        path: 'osa/post',
        name: 'osa/post',
        components: {
          osapost: OSAPost
        }
      },
      {
        path: 'osa/organizations',
        name: 'osa/organizations',
        components: {
          osaorganizations: OSAOrganization
        }
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresLogin) && !localStorage.getItem('auth')){
    next({name: 'Login'})
  }
  else if (to.matched.some((record) => record.meta.hasUser) && localStorage.getItem('auth') && localStorage.getItem('isAdmin')) {
      next({ name: "Home" });
	} 
  else if (to.matched.some((record) => record.meta.hasUser) && localStorage.getItem('auth') && localStorage.getItem('isUser')) {
      next({ name: "User" });
	} 
  else if (to.matched.some((record) => record.meta.isAdmin) && localStorage.getItem('auth') && localStorage.getItem('isUser')) {
      next({ name: "User" });
	} 
  else if (to.matched.some((record) => record.meta.isUser) && localStorage.getItem('auth') && localStorage.getItem('isAdmin')) {
      next({ name: "Home" });
	} 
  else {
		next();
	}
});

export default router
