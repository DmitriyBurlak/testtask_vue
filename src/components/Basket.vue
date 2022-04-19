<template>
    <div class="basket">
        <div v-if="data.length">
            <h3>Список товаров:</h3>
            <ul class="basket__list">
                <li v-for="item in newData" :key="item.id">
                    <span>{{item.title}}</span><span>{{item.count}} {{item.unit}} * {{item.price}} {{currency}}</span>
                    <span>{{(item.count * item.price).toFixed(2)}} {{currency}}</span>
                </li>
            </ul>
            <span class="basket__close" @click="$emit('close')">Продолжить покупки</span>
        </div>
        <div v-else>
            <h3>В корзине пока ничего нет</h3>
            <span class="basket__close" @click="$emit('close')">Вернуться назад</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newData: [...this.data].reverse(),
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        currency: String,
    },
}
</script>

<style>
    .basket {
        padding: 10px;
        max-width: 800px;
        margin: 0 auto;
    }
    .basket__list {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .basket__list li {
        padding: 10px 15px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .basket__list li span {
        width: 33.3%;
    }
    .basket__list li span:last-child {
        text-align: right;
    }
    .basket__close {
        cursor: pointer;
        color: blue;
    }
    @media (max-width: 480px) {
        .basket__list li span {
            width: 50%;
        }
        .basket__list li span:nth-child(2) {
            text-align: right;
        }
        .basket__list li span:nth-child(3) {
            width: 100%;
        }
    }
</style>