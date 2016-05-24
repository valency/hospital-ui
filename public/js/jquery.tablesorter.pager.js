(function($) {
	$.extend({
		

		tablesorterPager: new function() {
			

			function updatePageDisplay(c) {
				var s = $(c.cssPageDisplay,c.container).val((c.page+1) + c.seperator + c.totalPages);
				//alert(c.totalRows);
				var a = $(c.totalSize,c.container).val(c.totalRows);
			}
			
			function setPageSize(table,size) {
				var c = table.config;
				c.size = size;
				c.totalPages = Math.ceil(c.totalRows / c.size);
				moveToPage(table);
				fixPosition(table);
			}
			
			function fixPosition(table) {
				var c = table.config, o = $(table);
				if(o.offset) {
					c.container.css({
						//top: o.offset().top + o.height() + 'px',
						//position: 'absolute'
					});
				}
				c.pagerPositionSet = true;
			}
			/*跳转到第一页*/
			function moveToFirstPage(table,pager) {
				var c = table.config;
				c.page = 0;
				$(".pagesizeGoVal",pager).val(parseInt(c.page)+1);//改变跳转至某一页的显示
				moveToPage(table);
			}
			
			/*跳转到最后一页*/
			function moveToLastPage(table,pager) {
				var c = table.config;
				c.page = (c.totalPages-1);
				$(".pagesizeGoVal",pager).val(parseInt(c.page)+1);//改变跳转至某一页的显示
				moveToPage(table);
			}
			/*跳转到下一页*/
			function moveToNextPage(table,pager) {
				var c = table.config;
				c.page++;
				if(c.page >= (c.totalPages-1)) {
					c.page = (c.totalPages-1);
				}
				$(".pagesizeGoVal",pager).val(parseInt(c.page)+1);//改变跳转至某一页的显示
				moveToPage(table);
			}
			/*跳转到上一页*/
			function moveToPrevPage(table,pager) {
				var c = table.config;
				c.page--;
				if(c.page <= 0) {
					c.page = 0;
				}
				$(".pagesizeGoVal",pager).val(parseInt(c.page)+1);//改变跳转至某一页的显示
				moveToPage(table);
			}
						
			/*跳转到某一页*/
			function moveToPage(table) {
				var c = table.config;
				if(c.page < 0 || c.page > (c.totalPages-1)) {
					c.page = 0;
				}
				
				renderTable(table,c.rowsCopy);
			}
			
			function renderTable(table,rows) {
				
				var c = table.config;
				var l = rows.length;
				var s = (c.page * c.size);
				var e = (s + c.size);
				if(e > rows.length ) {
					e = rows.length;
				}
				var tableBody = $('tbody:first',table).empty();
				
				for(var i = s; i < e; i++) {
					
					tableBody.append(rows[i]);
				}
				
				if(!c.pagerPositionSet && c.positionFixed) fixPosition(table,tableBody);
				
				
				
				updatePageDisplay(c);
			}
			
			this.appender = function(table,rows) {
				
				var c = table.config;
				
				c.rowsCopy = rows;
				c.totalRows = rows.length;
				c.totalPages = Math.ceil(c.totalRows / c.size);
				
				renderTable(table,rows);
			};
			
			this.defaults = {
				size: 10,
				offset: 0,
				page: 0,//当前显示的页码
				totalRows: 0,
				totalSize:'.totalSize',
				totalPages: 0,
				container: null,
				cssNext: '.next',
				cssPrev: '.prev',
				cssFirst: '.first',
				cssLast: '.last',
				cssPageDisplay: '.pagedisplay',
				cssPageSize: '.pagesize',
				cssPageGo:'.pagesizeGo',//定位某一页
				seperator: "/",
				positionFixed: true,
				appender: this.appender
			};
			
			this.construct = function(settings) {

				return this.each(function() {	

					config = $.extend(this.config, $.tablesorterPager.defaults, settings);
					
					var table = this, pager = config.container;
				
					$(this).trigger("appendCache");

					config.size = parseInt($(".pagesize",pager).val());
					/** 
                     * add by cross 
                     */  
                    $(config.cssNext,pager).unbind('click');  
                    $(config.cssPrev,pager).unbind('click');  
				
					$(config.cssFirst,pager).click(function() {
						moveToFirstPage(table,pager);
						return false;
					});
					$(config.cssNext,pager).click(function() {
						moveToNextPage(table,pager);
						return false;
					});
					$(config.cssPrev,pager).click(function() {
						moveToPrevPage(table,pager);
						return false;
					});
					$(config.cssLast,pager).click(function() {
						moveToLastPage(table,pager);
						return false;
					});
					$(config.cssPageSize,pager).change(function() {
						setPageSize(table,parseInt($(this).val()));
						return false;
					});
					/*新增定位某一页*/
					$(config.cssPageGo,pager).click(function() {
						var c = table.config;
						c.page = parseInt($(".pagesizeGoVal",pager).val())-1;//首页从0算第一页 索引减去1
						moveToPage(table);
						return false;
					});
				});
			};
			
		}
	});
	// extend plugin scope
	$.fn.extend({
        tablesorterPager: $.tablesorterPager.construct
	});
	
})(jQuery);				