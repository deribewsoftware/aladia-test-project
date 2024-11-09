<script setup lang="ts">

interface Instructor {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  imageUrl: string;
  description: string;
  fullDescription: string;
}

const props = defineProps<{ instructor: Instructor }>();

// State for toggling "Show more / Show less"
const showMore = ref(false);
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<template>
  <div class="p-6 mb-6">
    <h2 class="text-xl font-bold text-violet-800 underline  mb-2">{{ instructor.name }}</h2>
    <p class="text-gray-600 mb-4">{{ instructor.title }}</p>

    <div class="flex items-center mb-4">
      <img :src="instructor.imageUrl" alt="Instructor image" class="w-28 h-28 rounded-full mr-4" />

      <div class="text-sm text-gray-900">
        <div class="flex items-center mb-1">
          <span class="text-gray-700 text-lg mr-1">★</span>
          <span>{{ instructor.rating }} Instructor Rating</span>
        </div>
        <div class="flex items-center mb-1">
          <div class="h-5 w-5 p-1 text-gray-700"><svg fill="#000000"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.382 23.382" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M14.58,15.181c0.438-0.732,1.082-1.107,1.936-1.117c0.854-0.01,1.285-0.445,1.299-1.301 c0.012-0.852,0.383-1.496,1.115-1.932c0.734-0.438,0.893-1.027,0.475-1.773c-0.416-0.744-0.416-1.488,0-2.234 c0.418-0.744,0.26-1.332-0.475-1.77c-0.732-0.439-1.104-1.082-1.115-1.938c-0.014-0.852-0.445-1.287-1.299-1.297 c-0.854-0.012-1.498-0.385-1.936-1.117c-0.438-0.734-1.027-0.893-1.771-0.475c-0.744,0.416-1.49,0.416-2.234,0 C9.83-0.19,9.241-0.032,8.803,0.702C8.366,1.435,7.721,1.808,6.868,1.819c-0.852,0.01-1.285,0.445-1.297,1.297 C5.557,3.972,5.186,4.614,4.454,5.054C3.72,5.492,3.559,6.079,3.979,6.824c0.418,0.746,0.418,1.49,0,2.234 c-0.42,0.746-0.26,1.336,0.475,1.773c0.732,0.436,1.104,1.08,1.117,1.932c0.012,0.855,0.445,1.291,1.297,1.301 c0.854,0.01,1.498,0.385,1.936,1.117c0.438,0.734,1.027,0.893,1.771,0.473c0.744-0.412,1.49-0.412,2.234,0 C13.553,16.073,14.143,15.915,14.58,15.181z M11.694,12.614c-2.582,0-4.674-2.092-4.674-4.674c0-2.58,2.092-4.672,4.674-4.672 c2.58,0,4.672,2.092,4.672,4.672C16.366,10.522,14.274,12.614,11.694,12.614z"></path> <path d="M6.793,14.749c-0.898,0-1.018-0.418-1.018-0.418l-3.507,6.893l2.812-0.316l1.555,2.34c0,0,3.24-6.76,3.24-6.715 C8.196,16.491,8.864,14.794,6.793,14.749z"></path> <path d="M17.563,14.601c-2.562,0.268-2.041,0.904-2.627,1.398c-0.674,0.719-1.516,0.578-1.516,0.578l3.955,6.805l0.973-2.52 l2.766,0.361L17.563,14.601z"></path> <polygon points="12.67,6.909 11.692,4.929 10.713,6.909 8.524,7.229 10.106,8.772 9.733,10.954 11.692,9.925 13.651,10.954 13.278,8.772 14.86,7.229 "></polygon> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg></div>
          <span>{{ instructor.reviews.toLocaleString() }} Reviews</span>
          
          </div>
        <div class="flex items-center mb-1">
          <div class="h-5 w-5">
            <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="people.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"></defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="12.610071" inkscape:cx="18.02637" inkscape:cy="5.0061764" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="true" inkscape:snap-global="false"> <inkscape:grid type="xygrid" id="grid816"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:0.91000001;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.49999997;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="m 18.853516,8.5820312 c -1.152452,0.0017 -2.230942,0.5679424 -2.886719,1.5156248 0.245759,0.621718 0.386719,1.293985 0.386719,1.998047 0,0.693735 -0.175104,1.331591 -0.4375,1.929688 0.648969,0.990797 1.753084,1.58837 2.9375,1.589843 1.942893,4.49e-4 3.518031,-1.574688 3.517578,-3.517578 -6.26e-4,-1.942127 -1.575448,-3.516074 -3.517578,-3.5156248 z M 22,16.345703 19.912109,19.611328 c 0.528723,1.153814 0.838621,2.416765 0.875,3.738281 l 0.02148,0.783203 -0.515625,0.587891 C 19.548375,25.571315 18.67911,26.30872 17.728516,26.933594 18.114724,26.97681 18.506361,27 18.904297,27 22.05905,27 24.881454,25.60556 26.806641,23.40625 26.721561,20.31573 24.843996,17.558273 22,16.345703 Z" transform="translate(0,289.0625)" id="path1013" inkscape:connector-curvature="0" sodipodi:nodetypes="ccsccccccccccscc"></path> <path inkscape:connector-curvature="0" id="path1018" d="m 10.835941,297.64216 a 3.5167647,3.516759 0 0 0 -3.5167638,3.51676 3.5167647,3.516759 0 0 0 3.5167638,3.51676 3.5167647,3.516759 0 0 0 3.516765,-3.51676 3.5167647,3.516759 0 0 0 -3.516765,-3.51676 z m 3.145856,7.76332 -3.0703,4.80292 -3.1115121,-4.79948 c -2.8464838,1.20791 -4.7285466,3.96325 -4.8183795,7.05412 1.925237,2.20091 4.7480521,3.59746 7.9041346,3.59746 3.154753,0 5.97723,-1.39473 7.902417,-3.59403 -0.08508,-3.09053 -1.962364,-5.84843 -4.80636,-7.06099 z" style="opacity:0.91000001;fill:#000000;fill-opacity:1;stroke:#ff0000;stroke-width:0.004;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"></path> </g> </g></svg>
          </div>
          <span>{{ instructor.students.toLocaleString() }} Students</span>
          </div>
          <div class="flex items-center mb-1">
          <div class="h-5 p-1 w-5">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2H0V14H16V2ZM6.5 5V11H7.5L11 8L7.5 5H6.5Z" fill="#000000"></path> </g></svg>
          </div>
          <span> {{ instructor.courses }} Courses</span>
         </div>
      </div>
    </div>

    <p class="text-gray-800 mb-4">
      <!-- Conditionally render part of the description based on showMore -->
      {{ showMore ? instructor.fullDescription : instructor.description }}
    </p>

    <button @click="toggleShowMore" class="text-purple-600 font-semibold">
      {{ showMore ? 'Show less' : 'Show more' }}
    </button>
  </div>
</template>

<style scoped>
/* Optional additional styling */
</style>
