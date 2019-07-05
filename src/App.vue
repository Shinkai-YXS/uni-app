<script>
  import {mapActions} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
      this.setUserInfo({userName: '123456789'})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    methods:{
      ...mapActions(['setUserInfo'])
    }
	}
</script>

<style>
	/*每个页面公共css */
</style>
