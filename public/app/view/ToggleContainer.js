/**
 * Created by Iruna on 21.02.14.
 */
Ext.define('DL.view.ToggleContainer', {
    extend: 'Ext.Container',
    xtype: 'tl-toggleContainer',

    config: {
        isChecked: false
    },

    initComponent: function () {

        if (this.getIsChecked()) {
            this.addCls('tl-checked');
        }


        this.element.on({
                scope: this,
                tap: function (e) {
                    this.toggle();
                    this.fireEvent('tap', e);
                }
            }
        )
    },

    toggle: function () {

        this.setIsChecked(!this.getIsChecked());

        if (this.getIsChecked()) {
            this.addCls('tl-checked');
        } else {
            this.removeCls('tl-checked');
        }
    }

});
