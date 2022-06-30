<template>
  <div class="home">
    <el-tiptap v-model="formInline.contentFileList" :extensions="extensions" />
    <el-button type="primary" @click="add">按钮</el-button>
    <img
      src="https://www.shouxicto.com/zb_users/upload/2021/11/20211109232053163647125346010.png"
      alt=""
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import { fileUpload } from "../../api/MochaITOM.js";
import {
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  Image,
  Blockquote,
  TextAlign,
  Indent,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TextColor,
  HorizontalRule,
} from "element-tiptap";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // render command-button in bubble menu.
        new Underline({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Image(),

        // new Image({
        //   //上传图片的方法
        //   uploadRequest(file) {
        //     const fd = new FormData();
        //     fd.append("file", file);
        //     fd.append("info_id", sessionStorage.getItem("uuid"));
        //     return this.$uploadArticleImg(fd).then((res) => {
        //       return sessionStorage.getItem("api3") + "/fj/" + res.data.path;
        //     });
        //   },
        // }),
        new Blockquote(),
        new TextAlign(),
        new Indent(),
        new Table(),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new HorizontalRule(),
        new TextColor(),
      ],
      // 添加信息数据
      formInline: {
        contentFileList: "",
      },
    };
  },
  methods: {
    add() {
      console.log(this.formInline.contentFileList);
    },
  },
};
</script>
