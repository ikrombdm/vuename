<template>
    <main>
        <div class="user-profile-card">
            <div class="user-pic">
                <img />
            </div>
            <div class="user-info">
                <span />
                <h3 />
                <p />
            </div>
        </div>
    </main>
</template>


<style scoped>
.user-pic img
{
    animation: animate 1s infinite;
}
.user-info span
{
    width: 40%;
    height: 16px;
    display: block;
    background: #eee;
    border-radius: 5px;
    animation: animateSk 1s infinite;
}
.user-info h3
{margin-top: 10px;
    width: 250px;
    height: 24px;
    background: #eee;
    border-radius: 5px;
    animation: animateSk 1s infinite;
}
.user-info p
{
    width: 80%;
    height: 16px;
    background: #eee;
    border-radius: 5px;
    animation: animateSk 1s ease-in-out infinite;
}

@keyframes animateSk {
    0%{
        background: #eee;
    }
    50%{
        background:#ddd;
    }
    100%
    {
    background: #eee;
    }
}
@keyframes animate {
    0%{
        border-color: linen;
    }
    50%{
        border-color: #ccc;
    }
    100%
    {
        border-color: linen;
    }
}
</style>