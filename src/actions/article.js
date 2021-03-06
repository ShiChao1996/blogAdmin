/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Actions from "./config";

function addTag(tag) {
  return {
    type: Actions.ADD_ARTICLE_TAG,
    tag: tag
  };
}

function removeTag(tag) {
  return {
    type: Actions.REMOVE_ARTICLE_TAG,
    tag: tag
  };
}

function saveContent(content) {
  return {
    type: Actions.SAVE_CONTENT,
    content: content
  };
}

function setImg(img) {
  return {
    type: Actions.SET_IMAGE,
    image: img
  }
}

function editArticle(article) {
  return {
    type: Actions.EDIT_ARTICLE,
    article: article
  };
}

function clear() {
  return {
    type: Actions.CLEAR
  }
}

export const article = {
  addTag,
  removeTag,
  saveContent,
  editArticle,
  setImg,
  clear
};