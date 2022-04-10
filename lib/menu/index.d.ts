import * as React from 'react';
import { ItemGroup, MenuProps as RcMenuProps, MenuRef } from 'rc-menu';
import SubMenu, { SubMenuProps } from './SubMenu';
import Item, { MenuItemProps } from './MenuItem';
import { MenuTheme } from './MenuContext';
import MenuDivider from './MenuDivider';
export { MenuDividerProps } from './MenuDivider';
export { MenuItemGroupProps } from 'rc-menu';
export declare type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
export interface MenuProps extends RcMenuProps {
    theme?: MenuTheme;
    inlineIndent?: number;
    /**
     * @private Internal Usage. Not promise crash if used in production. Connect with chenshuai2144
     *   for removing.
     */
    _internalDisableMenuItemTitleTooltip?: boolean;
}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRef>> & {
    Divider: typeof MenuDivider;
    Item: typeof Item;
    SubMenu: typeof SubMenu;
    ItemGroup: typeof ItemGroup;
};
export { MenuTheme, SubMenuProps, MenuItemProps, MenuRef };
export default Menu;
