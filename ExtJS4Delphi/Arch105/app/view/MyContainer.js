/*
 * File: app/view/MyContainer.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Arch105.view.MyContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.mycontainer',

    requires: [
        'Arch105.view.MyContainerViewModel',
        'Arch105.view.MyContainerViewController',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.Check',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Action'
    ],

    controller: 'mycontainer',
    viewModel: {
        type: 'mycontainer'
    },
    layout: 'fit',

    items: [
        {
            xtype: 'gridpanel',
            title: 'Customers',
            columnLines: true,
            bind: {
                store: '{customerModels}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'CUST_NO',
                    text: 'Cust No',
                    format: '00000',
                    editor: {
                        xtype: 'numberfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CUSTOMER',
                    text: 'Customer',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CONTACT_FIRST',
                    text: 'Contact First',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CONTACT_LAST',
                    text: 'Contact Last',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PHONE_NO',
                    text: 'Phone No',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ADDRESS_LINE1',
                    text: 'Address Line1',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ADDRESS_LINE2',
                    text: 'Address Line2',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CITY',
                    text: 'City',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'STATE_PROVINCE',
                    text: 'State Province',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COUNTRY',
                    text: 'Country',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'POSTAL_CODE',
                    text: 'Postal Code',
                    format: '00',
                    editor: {
                        xtype: 'textfield'
                    }
                },
                {
                    xtype: 'checkcolumn',
                    dataIndex: 'ON_HOLD',
                    text: 'On Hold'
                },
                {
                    xtype: 'actioncolumn',
                    width: 50,
                    menuDisabled: true,
                    text: 'Actions',
                    items: [
                        {
                            handler: 'onDelete',
                            altText: 'Delete',
                            icon: 'https://cdn2.iconfinder.com/data/icons/aspneticons_v1.0_Nov2006/delete_16x16.gif',
                            iconCls: ''
                        }
                    ]
                }
            ],
            plugins: [
                {
                    ptype: 'rowediting',
                    autoUpdate: true
                }
            ]
        }
    ]

});