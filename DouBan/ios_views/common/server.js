/*
 * 服务 URL
 * 基于豆瓣开放 API 的图书、音乐和电影服务
 * 如果 https://api.douban.com/v2/ 都保持不变，则可以将其设置为 BaseURL
 */

'use strict';

module.exports = {
	book_search: 'https://api.douban.com/v2/book/search',
	book_search_id: 'https://api.douban.com/v2/book/',
	music_search: 'https://api.douban.com/v2/music/search',
	music_search_id: 'https://api.douban.com/v2/music/',
	movie_search: 'https://api.douban.com/v2/movie/search',
	movie_search_id: 'https://api.douban.com/v2/movie/subject/'
};