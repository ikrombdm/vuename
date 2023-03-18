<template>
    <main>
        <div class="user-profile-card">
            <div class="user-pic">
                <img :src="UserData.pic" alt="">
            </div>
            <div class="user-info">
                <span>Written by:</span>
                <h3>{{ UserData.name }}</h3>
                <p>{{ UserData.bio }}</p>
            </div>
        </div>
    </main>
</template>

<script>
import image from "../assets/images/allgood logo.png"
import { ref } from "vue"

const loadUserData = async () =>{
    return new Promise((e) =>{
        e({
            name: "Ikrombek",
            pic: image,
            bio: "Lorem ipsum dolor sit amet consectetur"
        })
    })
}

export default {
    async setup() {
        const UserData = ref(await loadUserData())

        return {
            UserData
        }
    }
}
</script>

<style>
.user-profile-card
{
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    display: flex;
    gap: 15px;
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}
.user-pic img
{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 4px;
    border: 5px solid lightseagreen;
}
.user-info span
{
    color: #222;
}
.user-info h3
{
    color: #222;
}
.user-info p
{
    color: #555;
}
</style>