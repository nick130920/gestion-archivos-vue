

<template>
  <q-card>
    <q-card-section>
      <div class="document-info">
        <div>
          <span>ID: {{ document.id }}</span>
          <span>Name: {{ document.firstName }} {{ document.lastName }}</span>
          <span>File: {{ document.fileName }}</span>
          <span>Pages: {{ document.pageCount }}</span>
        </div>
        <div class="file-preview">
          <q-img :src="filePreviewUrl" v-if="filePreviewUrl" alt="File Preview" />
          <span v-else>No file preview available</span>
        </div>
      </div>
      <div class="document-actions">
        <q-icon name="edit" @click="editDocument" />
        <q-icon name="delete" @click="deleteDocument" />
        <q-icon name="info" @click="showDocumentInfo" />
        <q-icon name="send" @click="sendDocument" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    document: Object,
  },
  data() {
    return {
      filePreviewUrl: null,
    };
  },
  methods: {
    editDocument() {
      console.log('Document edit:', this.document);
    },
    deleteDocument() {
      console.log('Document delete:', this.document);
    },
    showDocumentInfo() {
      console.log('Document info:', this.document);
    },
    sendDocument() {
      console.log('Document send:', this.document);
    },
    generateFilePreview() {
      if (this.document.fileName.endsWith('.pdf')) {
        this.filePreviewUrl = 'https://cdn-icons-png.flaticon.com/512/11180/11180756.png';
      } else if (this.document.fileName.endsWith('.jpg') || this.document.fileName.endsWith('.png')) {
        this.filePreviewUrl = 'https://cdn-icons-png.flaticon.com/512/739/739249.png';
      } else {
        this.filePreviewUrl = 'https://icons8.com/icon/11614/add-file';
      }
    },
  },
  mounted() {
    this.generateFilePreview();
  },
};
</script>
<style scoped>
.document-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.document-actions {
  display: flex;
  gap: 10px;
}

.file-preview {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.file-preview q-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}
</style>
