const dirTree = require('directory-tree');
const path = require('path');

const docs = path.join(__dirname, '../');
const ext = '.md';
const excludesFolderName = ['.vuepress', 'about'];
const tree = dirTree(docs).children.filter(
	v => !excludesFolderName.includes(v.name) && v.type === 'directory'
);

const treeToSidebar = function(tree) {
	const sidebar = [];

	tree.forEach(item => {
		sidebar.push(new sidebarRootItem(item.name, getChildren(item)));
	});

    return sidebar;
};

const getChildren = function(directory) {
    dir = directory.children;
	const children = [];

    dir.forEach(item => {
        if (item.type === 'directory') {
            const items = getChildren(item);
            children.push(new sidebarItem(item.name, items));
        } else if (item.type === 'file' && item.extension === ext) {
            children.push(item.path.toString().replace(docs, '').replace(ext, '').replace(/\\/gi, "/"));
        }
    });

    return children;
};

const sidebarItem = function(title, children = []) {
	return {
		title,
		children
	};
};

const sidebarRootItem = function(title, children) {
	const item = sidebarItem(title, children);
	item.initialOpenGroupIndex = -1;
	return item;
};

const sidebar = treeToSidebar(tree);

module.exports = sidebar;
