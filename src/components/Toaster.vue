<template>
    <div
        v-if="visibility"
        :id="id"
        class="my-toaster">
        <div
            class="my-toaster__wrapper"
            :class="backgroundClass">
            <p class="my-toaster__wrapper-message">{{ message }}</p>
            <span
                class="my-toaster__wrapper-close"
                @click="closeToaster">
                x
            </span>
        </div>
    </div>
</template>

<script>
export default {

    data() {
      return {
          visibility: false,
          message: 'asdfsaf',
          id: 'Id',
          type: 'success'
      };
    },

    mounted() {
        document.querySelector('body').appendChild(this.$el);
    },

    computed: {
        backgroundClass() {
            if (this.type === 'information') {
                return 'my-toaster__wrapper--blue';
            } else if (this.type === 'alert') {
                return 'my-toaster__wrapper--red';
            }

            return 'my-toaster__wrapper--green';
        }
    },

    methods: {
        open({ message, id, visibility, type = 'success' }) {
            this.visibility = visibility;
            this.message = message;
            this.id = id;
            this.type = type;
        },

        closeToaster() {
            this.visibility = false;
        }
    }
}
</script>

<style scoped lang="scss">
.my-toaster {
    position: fixed;
    top: 30px;
    right: 30px;
    max-width: 450px;
    min-width: 300px;
    width: auto;

    &__wrapper {
        padding: 30px 15px;
        color: white;
        border-radius: 5px;

        &--green {
            background-color: green;
        }

        &--red {
            background-color: red;
        }

        &--blue {
            background-color: deepskyblue;
        }

        &-message {
            text-align: left;
            word-break: break-all;
            margin: 0;
        }

        &-close {
            position: absolute;
            right: 10px;
            font-size: 20px;
            top: 0;
            cursor: pointer;
        }
    }
}
</style>