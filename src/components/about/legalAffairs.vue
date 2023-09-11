<template>
  <section class="P_top_60 P_bottom_60">
    <div class="d-flex align-items-center justify-content-center gap20 flex-column">
        <h4 class="mainColor fontBold mb-0">{{ $t('about.legalAffairs') }}</h4>
        <span class="font12 fontBold d-flex"><span>{{ $t('about.legalAffairsNo') }}</span> <span>: {{ aboutData.legal_affairs_phone }}</span></span>
        <span class="font12 fontBold d-flex"><span>{{ $t('about.email') }}</span><span>: {{ aboutData.legal_affairs_email }}</span></span>
    </div>
  </section>
</template>

<script>
export default {
    props : ['aboutData']
}
</script>

<style>

</style>