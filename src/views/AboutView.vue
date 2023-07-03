<template>
  <div>
    <how-we></how-we>
    <our-massage></our-massage>
    <our-values></our-values>
    <our-identity></our-identity>
    <our-history></our-history>
    <our-target></our-target>
    <economic-activity></economic-activity>
    <legal-affairs></legal-affairs>
  </div>
</template>

<script>
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
  }
}
</script>

