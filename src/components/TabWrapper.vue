<template>
    <div>
        <ul>
            <li v-for="title in tabTitles"
             :key="title" 
             @click="selectedTitle = title"
             v-bind:class="{
                'activetab': tabTitles === title
             }"
             >
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from "vue"

export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0]);

        provide("selectedTitle", selectedTitle)
        return {
            tabTitles,
            selectedTitle,
        }
    },
}
</script>

<style>
.selectedTitle
{
    color: red;
}
</style>