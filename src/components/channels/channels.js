/* ============
 * Channels Component
 * ============
 *
 * todo: add documentation here!
 */

export default {
  components: {
    videos: require('@/components/videos/videos.vue'),
  },
  props: {
    krejtQaneli: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
    videot:[],
  }),
  mounted() {
    console.log('Channels component has been mounted!');
  },
};
