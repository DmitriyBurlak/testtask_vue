<template>
    <div class="basket">
        <div v-if="data.length">
            <h3>Список товаров:</h3>
            <ul class="basket__list">
                <li v-for="item in newData" :key="item.id">
                    <span>{{item.title}}</span><span>{{item.count}} {{item.unit}} * {{item.price}} {{currency}}</span>
                    <span class="list__price">
                        {{(item.count * item.price).toFixed(2)}} {{currency}}
                        <div class="basket__link control" @click="$emit('delete-item', item.id)">Удалить</div>
                    </span>
                </li>
            </ul>
            <div class="basket__control">
                <span class="basket__link" @click="$emit('close')">Продолжить покупки</span>
                <span class="basket__link" @click="$emit('clear-basket')">Очистить корзину</span>
            </div>

        </div>
        <div v-else>
            <h3>В корзине пока ничего нет</h3>
            <span class="basket__link" @click="$emit('close')">Вернуться назад</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: []
        },
        currency: String,
    },
    computed: {
        newData() {
            return [...this.data].reverse();
        }
    }
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
        padding-bottom: 18px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .basket__list li span {
        width: 33.3%;
    }
    .basket__link {
        cursor: pointer;
        color: blue;
    }
    .basket__control {
        display: flex;
        justify-content: space-between;
    }
    .list__price {
        position: relative;
        text-align: right;
    }
    .list__price .control {
        position: absolute;
        font-size: 12px;
        bottom: 0;
        right: 0;
        opacity: 0;
        transition: all 0.2s linear;
    }
    .basket__list li:hover .list__price .control{
        bottom: -15px;
        opacity: 1;
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
        .basket__control {
            flex-direction: column;
        }
        .basket__link {
            padding-bottom: 10px;
        }
        .basket__link:last-child {
            padding-bottom: 0;
        }
    }
</style>