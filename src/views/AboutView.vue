<template>
  <div>
    <how-we id="howWe" :aboutData="aboutData"></how-we>
    <our-massage id="ourMassage" :aboutData="aboutData"></our-massage>
    <our-values id="ourValues" :aboutData="aboutData"></our-values>
    <our-identity id="ourIdentity" :aboutData="aboutData"></our-identity>
    <our-history id="ourHistory" :aboutData="aboutData"></our-history>
    <our-target id="ourTarget" :aboutData="aboutData"></our-target>
    <economic-activity id="economicActivity" :aboutData="aboutData"></economic-activity>
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
    }
  },

  methods: {
    async get_aboutUs(){
      await axios.get('aboutUs')
      .then( (res)=>{
        this.aboutData = res.data.data
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

