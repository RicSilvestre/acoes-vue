<template>
  <BodyWrapper :apiData="apiData"/>
</template>

<script>
import BodyWrapper from '../components/BodyWrapper'
export default {
  props: ["apiData"],
  components: {
    BodyWrapper
  }
}
</script>

<style>

</style>