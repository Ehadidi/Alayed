<template>
  <div>
    <how-we id="howWe" :paragraph_banner="paragraph_banner" :aboutData="aboutData"></how-we>
    <our-massage id="ourMassage" :aboutData="aboutData"></our-massage>
    <our-values id="ourValues" :aboutData="aboutData"></our-values>
    <our-identity id="ourIdentity" :identity_banner="identity_banner" :aboutData="aboutData"></our-identity>
    <our-history id="ourHistory" :aboutData="aboutData"></our-history>
    <our-target id="ourTarget" :aboutData="aboutData"></our-target>
    <economic-activity id="economicActivity" :economic_banner="economic_banner" :aboutData="aboutData"></economic-activity>
    <legal-affairs id="legalAffairs" :aboutData="aboutData"></legal-affairs>
  </div>
</template>

<script>
import axios from 'axios';
import howWe from '@/components/about/howWe.vue';
import ourMassage from '@/components/about/ourMassage.vue';
import ourValues from '@/components/about/ourValues.vue';
import ourIdentity from '@/components/about/ourIdentity.vue';
import ourHistory from '@/components/about/ourHistory.vue';
import ourTarget from '@/components/about/ourTarget.vue';
import economicActivity from '@/components/about/economicActivity.vue';
import legalAffairs from '@/components/about/legalAffairs.vue';

export default {
  components:{
    howWe,
    ourMassage,
    ourValues,
    ourIdentity,
    ourHistory,
    ourTarget,
    economicActivity,
    legalAffairs
  },
  data() {
    return {
      loader: true,
      aboutData : [],
      paragraph_banner:'',
      economic_banner:'',
      identity_banner:''
    }
  },

  methods: {
    async get_aboutUs(){
      await axios.get('aboutUs')
      .then( (res)=>{
        this.economic_banner = res.data.data.economic_banner
        this.identity_banner = res.data.data.identity_banner
        this.aboutData = res.data.data
        this.paragraph_banner = res.data.data.paragraph_banner
        console.log(this.aboutData);
          this.loader = false
      } )
    }
  },
  mounted(){
    this.get_aboutUs()
  },
}
</script>

