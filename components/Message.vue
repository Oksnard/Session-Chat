<template>
  <div>
    <div v-if="name === 'admin'" class="system">
      <p class="text-center">{{ text }}</p>
      <hr />
    </div>
    <div v-else class="wrap">
      <div :class="{ owner }" class="message">
        <small class="text-center">
          <strong>{{ name }}</strong>
        </small>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    owner: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.system {
  margin: 1rem 0;
}

.system p {
  margin-bottom: 1rem;
}

.wrap {
  display: flex;
  flex-direction: column;
}

.message {
  padding: 1rem;
  width: 60%;
  margin: 0.5rem 1rem;
  box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
  border-radius: 4px;
  background: #1976d2;
  bottom: 1rem;
}

.message p {
  margin: 0;
}

.owner {
  background: #ffffff;
  color: #000000;
  align-self: flex-end;
}
</style>
