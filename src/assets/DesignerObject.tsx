

export const DesignerObject = {
    "Data": {
        "screen": {
            "actionSets": {
                "14468a5c-8ade-4ca6-8962-e96e6b784fd3": {
                    "Name": "",
                    "ActionSetId": "14468a5c-8ade-4ca6-8962-e96e6b784fd3",
                    "Key": "14468a5c-8ade-4ca6-8962-e96e6b784fd3",
                    "Scope": 0,
                    "Actions": [
                        {
                            "Type": "Go To Screen",
                            "ScreenId": "back",
                            "ActiveRecordId": null,
                            "ReplaceHistory": true,
                            "RefreshOnTransition": false,
                            "RefreshCurrent": false,
                            "OpenIn": null,
                            "Params": [],
                            "Notes": "Go Back",
                            "ActionId": 14,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        }
                    ],
                    "Notes": "",
                    "IsInAppStore": false
                },
                "b9330125-37a3-499c-a0bd-6a7983c638f1": {
                    "Name": "",
                    "ActionSetId": "b9330125-37a3-499c-a0bd-6a7983c638f1",
                    "Key": "b9330125-37a3-499c-a0bd-6a7983c638f1",
                    "Scope": 0,
                    "Actions": [
                        {
                            "Type": "Go To Screen",
                            "ScreenId": "e3337813-5edc-4c24-829c-9dd410573200",
                            "ActiveRecordId": {
                                "ValueType": 10,
                                "Value": -1,
                                "Property": null,
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ReplaceHistory": false,
                            "RefreshOnTransition": false,
                            "RefreshCurrent": false,
                            "OpenIn": 0,
                            "Params": [
                                {
                                    "Key": null,
                                    "Value": {
                                        "ValueType": 9,
                                        "Value": "",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "Notes": "Go To New Item Type",
                            "ActionId": 14,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        }
                    ],
                    "Notes": "",
                    "IsInAppStore": false
                },
                "a5504326-6d81-4c98-b80d-0b2dd8b8194c": {
                    "Name": "",
                    "ActionSetId": "a5504326-6d81-4c98-b80d-0b2dd8b8194c",
                    "Key": "a5504326-6d81-4c98-b80d-0b2dd8b8194c",
                    "Scope": 0,
                    "Actions": [
                        {
                            "Type": "Assign Value To Action Result",
                            "AssignValueToActions": [
                                {
                                    "Source": {
                                        "ValueType": 5,
                                        "Value": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                        "Property": "ItemType",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "ActionResultId": "8f1958c9-d176-4522-8832-5671a122bfd9",
                                    "IsSharedResult": false,
                                    "ActionResultName": "resultItemType",
                                    "ValidationMessages": []
                                }
                            ],
                            "IgnoreLogging": false,
                            "IsAppRoutineInputValue": false,
                            "Notes": "resultItemType",
                            "ActionId": 0,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "If...then",
                            "ExpressionList": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 0,
                                        "Value": "8f1958c9-d176-4522-8832-5671a122bfd9",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Inventory",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "ActionSetOnTrue": {
                                "Name": "",
                                "ActionSetId": "da5bc297-67e8-42bc-941d-966f9727b499",
                                "Key": "da5bc297-67e8-42bc-941d-966f9727b499",
                                "Scope": 0,
                                "Actions": [
                                    {
                                        "Type": "Go To Screen",
                                        "ScreenId": "b9d6cd72-26aa-4492-8195-1f51c2800bca",
                                        "ActiveRecordId": {
                                            "ValueType": 5,
                                            "Value": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                            "Property": "RecordID",
                                            "ChildProperty": null,
                                            "ValidationMessage": null,
                                            "FontStyles": null
                                        },
                                        "ReplaceHistory": false,
                                        "RefreshOnTransition": false,
                                        "RefreshCurrent": false,
                                        "OpenIn": 0,
                                        "Params": [
                                            {
                                                "Key": null,
                                                "Value": {
                                                    "ValueType": 9,
                                                    "Value": "",
                                                    "Property": "",
                                                    "ChildProperty": null,
                                                    "ValidationMessage": "",
                                                    "FontStyles": null
                                                }
                                            }
                                        ],
                                        "Notes": "Go to Inventory screen",
                                        "ActionId": 14,
                                        "Disabled": false,
                                        "InValid": false,
                                        "ValidationMessages": [],
                                        "Metadata": null
                                    }
                                ],
                                "Notes": "",
                                "IsInAppStore": false
                            },
                            "ActionSetOnFalse": {
                                "Name": "Action Set",
                                "ActionSetId": "84be7540-6b68-edcf-a942-738da03d1597",
                                "Key": "84be7540-6b68-edcf-a942-738da03d1597",
                                "Scope": 0,
                                "Actions": [
                                    {
                                        "Type": "Go To Screen",
                                        "ScreenId": "06149f5c-fc61-4b3f-b263-3acc3392428c",
                                        "ActiveRecordId": {
                                            "ValueType": 5,
                                            "Value": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                            "Property": "RecordID",
                                            "ChildProperty": null,
                                            "ValidationMessage": null,
                                            "FontStyles": null
                                        },
                                        "ReplaceHistory": false,
                                        "RefreshOnTransition": false,
                                        "RefreshCurrent": false,
                                        "OpenIn": 0,
                                        "Params": [
                                            {
                                                "Key": null,
                                                "Value": {
                                                    "ValueType": 9,
                                                    "Value": "",
                                                    "Property": "",
                                                    "ChildProperty": null,
                                                    "ValidationMessage": "",
                                                    "FontStyles": null
                                                }
                                            }
                                        ],
                                        "Notes": "Go To Service Item screen",
                                        "ActionId": 14,
                                        "Disabled": false,
                                        "InValid": false,
                                        "ValidationMessages": [],
                                        "Metadata": null
                                    }
                                ],
                                "Notes": "",
                                "IsInAppStore": false
                            },
                            "Notes": "If Inventory",
                            "ActionId": 1,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        }
                    ],
                    "Notes": "",
                    "IsInAppStore": false
                },
                "af345967-8104-4f39-bdff-0b6831176a0d": {
                    "Name": "Action Set",
                    "ActionSetId": "af345967-8104-4f39-bdff-0b6831176a0d",
                    "Key": "af345967-8104-4f39-bdff-0b6831176a0d",
                    "Scope": 0,
                    "Actions": [
                        {
                            "Type": "Assign Value To Action Result",
                            "AssignValueToActions": [
                                {
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Input",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                    "IsSharedResult": false,
                                    "ActionResultName": "VariableName",
                                    "ValidationMessages": []
                                }
                            ],
                            "IgnoreLogging": false,
                            "IsAppRoutineInputValue": false,
                            "Notes": "Comment",
                            "ActionId": 0,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Assign Value To Shared Result",
                            "AssignValueToActions": [
                                {
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Input",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                    "IsSharedResult": true,
                                    "ActionResultName": "VariableName",
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 31,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Character Functions",
                            "Source": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Options": {
                                "Separator": "",
                                "TextValues": [
                                    {
                                        "ValueType": 9,
                                        "Value": "Input 1",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    {
                                        "ValueType": 9,
                                        "Value": "Input 2",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                ],
                                "ValidationMessages": []
                            },
                            "ControlToUpdate": null,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "TextFunctionType": 5,
                            "Notes": "comment",
                            "ActionId": 8,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Date Functions",
                            "Source": {
                                "ValueType": 11,
                                "Value": "2024-09-19T22:23:26.747Z",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ControlToUpdate": null,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "DateFunctionType": 5,
                            "Options": {
                                "Amount": {
                                    "ValueType": 10,
                                    "Value": 1,
                                    "Property": "",
                                    "ChildProperty": null,
                                    "ValidationMessage": null,
                                    "FontStyles": null
                                },
                                "ValidationMessages": []
                            },
                            "Notes": "Comment",
                            "ActionId": 17,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Math Functions",
                            "Values": [
                                {
                                    "ValueType": 10,
                                    "Value": 1,
                                    "Property": "",
                                    "ChildProperty": null,
                                    "ValidationMessage": null,
                                    "FontStyles": null
                                },
                                {
                                    "ValueType": 10,
                                    "Value": 2,
                                    "Property": "",
                                    "ChildProperty": null,
                                    "ValidationMessage": null,
                                    "FontStyles": null
                                }
                            ],
                            "ControlToUpdate": null,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "MathFunctionType": 4,
                            "Rounding": 0,
                            "DecimalPlaces": 0,
                            "Notes": "Comment",
                            "ActionId": 9,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "ViewNameFriendly": "SalesReceipt",
                            "Type": "Delete Records From Table",
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 10,
                                        "Value": 1,
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 21,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Insert Records Into Table",
                            "Fields": [
                                {
                                    "Field": "Customer",
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Jake",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                },
                                {
                                    "Field": "TxnDate",
                                    "Source": {
                                        "ValueType": 6,
                                        "Value": "CurrentDateTime",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "InsertType": 0,
                            "SourceRecordId": {
                                "ValueType": 10,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "ViewNameFriendly": "SalesReceipt",
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "FieldsToOmit": [],
                            "IncludeDocuments": false,
                            "Notes": "Comment",
                            "ActionId": 5,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Loop Through Table",
                            "ViewNameFriendly": "SalesReceipt",
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 10,
                                        "Value": 2,
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "DistinctColumn": null,
                            "Sorting": [
                                {
                                    "Field": "RecordID",
                                    "IsAscending": true,
                                    "ValidationMessage": null,
                                    "ValidationMessages": []
                                }
                            ],
                            "LoopActionSet": {
                                "Name": "Action Set",
                                "ActionSetId": "00900b74-370e-59d8-d863-01f8689174e2",
                                "Key": "00900b74-370e-59d8-d863-01f8689174e2",
                                "Scope": 0,
                                "Actions": [],
                                "Notes": "",
                                "IsInAppStore": false
                            },
                            "Notes": "Comment",
                            "ActionId": 26,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "ViewNameFriendly": "SalesReceipt",
                            "Type": "Retrive Values From Table",
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 10,
                                        "Value": 3,
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "AggregationType": 0,
                            "Bindings": [
                                {
                                    "FieldName": "FirstName",
                                    "ControlToUpdate": null,
                                    "ResultToSet": {
                                        "Source": null,
                                        "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                        "IsSharedResult": false,
                                        "ActionResultName": "VariableName",
                                        "ValidationMessages": []
                                    },
                                    "UpdateControl": false
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 22,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Fields": [
                                {
                                    "Field": "Customer",
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Jake",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "ViewNameFriendly": "SalesReceipt",
                            "Type": "Update Fields In Table",
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 10,
                                        "Value": 4,
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "IsSaveAll": false,
                            "Notes": "Comment",
                            "ActionId": 6,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Loop Through Grid",
                            "GridId": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                            "OnlyCheckedRecords": false,
                            "LoopActionSet": {
                                "Name": "Action Set",
                                "ActionSetId": "6feab161-8b85-3fe7-44d0-82176b8a1256",
                                "Key": "6feab161-8b85-3fe7-44d0-82176b8a1256",
                                "Scope": 0,
                                "Actions": [],
                                "Notes": "",
                                "IsInAppStore": false
                            },
                            "GridView": null,
                            "Notes": "Comment",
                            "ActionId": 29,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Generate Report",
                            "ReportName": "Printable Invoice XERO",
                            "ReportDisplayName": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ReportNameOverride": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ViewFriendlyName": "Invoice",
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 10,
                                        "Value": 2,
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "SafeGuard": 0,
                            "ReportType": 0,
                            "DisplayReport": true,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "OptimizeFields": true,
                            "Notes": "Comment",
                            "ActionId": 20,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Clear Screen For New Entry",
                            "Notes": "Comment",
                            "ActionId": 13,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Enable/Disable Controls",
                            "ControlsToUpdate": [
                                {
                                    "ControlId": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                                    "ToggleOptions": 0,
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 11,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Expand/Collapse Section",
                            "ControlsToUpdate": [
                                {
                                    "ControlId": "968141fd-0476-4347-b73c-8ece414cd6cb",
                                    "ToggleOptions": 0,
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 34,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Go To Screen",
                            "ScreenId": "39ee20f3-4882-4689-a2dc-10affdd3db3f",
                            "ActiveRecordId": {
                                "ValueType": 10,
                                "Value": -1,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ReplaceHistory": false,
                            "RefreshOnTransition": false,
                            "RefreshCurrent": false,
                            "OpenIn": 0,
                            "Params": [
                                {
                                    "Key": null,
                                    "Value": {
                                        "ValueType": 9,
                                        "Value": "",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 14,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Go To Web Page",
                            "Url": {
                                "ValueType": 9,
                                "Value": "website.com",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "NewTab": false,
                            "Notes": "Comment",
                            "ActionId": 33,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Prepare For Accounting",
                            "SyncOverride": true,
                            "WhereClause": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "RecordID",
                                        "Property": "Integer",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": "",
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 6,
                                        "Value": "ActiveRecordID",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "ViewNameFriendly": "SalesReceipt",
                            "Notes": "Comment",
                            "ActionId": 27,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Refresh Control",
                            "ControlsToRefresh": [
                                {
                                    "ControlId": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                    "ClearCheckboxes": true,
                                    "IncludeData": false,
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 15,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Retrieve Exchange Rate",
                            "CurrencyCode": {
                                "ValueType": 6,
                                "Value": "CompanyAccountCurrency",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "AsOfDate": {
                                "ValueType": 6,
                                "Value": "CurrentDateTime",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ControlToUpdate": null,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "UpdateControl": false,
                            "Notes": "Comment",
                            "ActionId": 43,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Save All",
                            "ValidateControlsOnScreen": true,
                            "Notes": "Comment",
                            "ActionId": 4,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Set Active Record ID For Screen",
                            "ActiveRecordId": {
                                "ValueType": 10,
                                "Value": 1,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "NoReload": false,
                            "NoRecordChangeEvent": false,
                            "NoRefresh": false,
                            "Notes": "Comment",
                            "ActionId": 7,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Set Focus To Control",
                            "ControlId": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                            "Notes": "Comment",
                            "ActionId": 12,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Set View Filter",
                            "ViewFilters": [
                                {
                                    "ControlId": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                    "ViewFilterId": "f954679e-a6d4-4754-b6af-9763b3c6bfe2",
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 16,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Show Message",
                            "Message": "This is the body",
                            "MessageParameters": [],
                            "Buttons": "ok",
                            "Title": "This is the title",
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "efd678f3-16f2-f8ed-e997-9b4499c0ffac",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "Notes": "Comment",
                            "ActionId": 2,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Show Right Panel",
                            "Panel": "invite",
                            "Notes": "Comment",
                            "ActionId": 36,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Show/Hide Controls",
                            "ControlsToUpdate": [
                                {
                                    "ControlId": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                                    "ToggleOptions": 1,
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 10,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Update Controls On Screen",
                            "ControlsToUpdate": [
                                {
                                    "ControlId": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                                    "Property": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "NewButtonName",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 3,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Update Editable Grid Read Only Property",
                            "ControlsToUpdate": [
                                {
                                    "ControlId": "1e6b19cb-4c88-f41a-a585-eba893b8b676",
                                    "ToggleOptions": 0,
                                    "ValidationMessages": []
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 42,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Validate Controls On Screen",
                            "IgnoreDataTable": false,
                            "ValidateAllControls": true,
                            "ControlsToValidate": [],
                            "ValidateSingleRow": -1,
                            "Notes": "Comment",
                            "ActionId": 37,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "METADATA_ATTACHTOEMAIL": "AttachToEmail",
                            "METADATA_CREATEDBY": "CreatedBy",
                            "METADATA_CREATEDDATE": "CreatedDate",
                            "METADATA_EXTENSION": "Extension",
                            "METADATA_FILENAME": "Filename",
                            "METADATA_SIZE": "Size",
                            "METADATA_TENANTID": "TenantId",
                            "METADATA_URL": "Url",
                            "Type": "Add Attachment To Record ID",
                            "ViewNameFriendly": "SalesReceipt",
                            "RecordId": {
                                "ValueType": 10,
                                "Value": 5,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Url": {
                                "ValueType": 9,
                                "Value": "google.com",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "AttachToEmail": {
                                "ValueType": 12,
                                "Value": false,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Notes": "Comment",
                            "ActionId": 39,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "METADATA_ATTACHTOEMAIL": "AttachToEmail",
                            "METADATA_CREATEDBY": "CreatedBy",
                            "METADATA_CREATEDDATE": "CreatedDate",
                            "METADATA_EXTENSION": "Extension",
                            "METADATA_FILENAME": "Filename",
                            "METADATA_SIZE": "Size",
                            "METADATA_TENANTID": "TenantId",
                            "METADATA_URL": "Url",
                            "Type": "Loop Through Attachments",
                            "ViewNameFriendly": "SalesReceipt",
                            "RecordId": {
                                "ValueType": 10,
                                "Value": 6,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "LoopActionSet": {
                                "Name": "Action Set",
                                "ActionSetId": "e284ab7a-1a82-e9c2-c282-5c365892e90e",
                                "Key": "e284ab7a-1a82-e9c2-c282-5c365892e90e",
                                "Scope": 0,
                                "Actions": [],
                                "Notes": null,
                                "IsInAppStore": false
                            },
                            "Notes": "Comment",
                            "ActionId": 38,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Calculate Currency Conversion",
                            "Value": {
                                "ValueType": 10,
                                "Value": 1,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ExchangeRate": {
                                "ValueType": 10,
                                "Value": 4.5,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ToHomeCurrency": true,
                            "ControlToUpdate": null,
                            "UpdateControl": false,
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "Notes": "Comment",
                            "ActionId": 44,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "ActionSetId": "14468a5c-8ade-4ca6-8962-e96e6b784fd3",
                            "AppRoutineId": "00000000-0000-0000-0000-000000000000",
                            "AppRoutineVersionId": "00000000-0000-0000-0000-000000000000",
                            "InputValues": [],
                            "OutputValues": [],
                            "IsSync": true,
                            "CustomMessage": null,
                            "ShowMessage": false,
                            "Type": "Call Routine",
                            "Notes": "Comment",
                            "ActionId": 30,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Headers": [
                                {
                                    "Key": "Key1",
                                    "Value": {
                                        "ValueType": 9,
                                        "Value": "KeyValue1",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "Params": [
                                {
                                    "Key": "ParameterName1",
                                    "Value": {
                                        "ValueType": 9,
                                        "Value": "ParameterValue1",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    }
                                }
                            ],
                            "Payload": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "657e9af8-f1d5-b98b-fa85-1bb94f92b7bb",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "StatusCodeToSet": {
                                "Source": null,
                                "ActionResultId": "e0d3605c-658f-0359-6080-251687dbcee4",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "Type": "Call Web Service",
                            "Checked": false,
                            "Function": null,
                            "Url": "google.com",
                            "HttpMethod": 0,
                            "WebServiceType": 1,
                            "ContentType": 0,
                            "Notes": "Comment",
                            "ActionId": 24,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Check Permission",
                            "AppId": "55b7fa26-9d45-400d-829f-a3610098567c",
                            "Permission": 0,
                            "DenialMessage": null,
                            "ShowMessage": false,
                            "User": {
                                "ValueType": 6,
                                "Value": "UserRecordID",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "Notes": "Comment",
                            "ActionId": 19,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "If...then",
                            "ExpressionList": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 0,
                                        "Value": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Another Variable",
                                        "Property": "",
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "ActionSetOnTrue": {
                                "Name": "Action Set",
                                "ActionSetId": "f5698092-1fd0-6112-b711-788d508db2d0",
                                "Key": "f5698092-1fd0-6112-b711-788d508db2d0",
                                "Scope": 0,
                                "Actions": [],
                                "Notes": null,
                                "IsInAppStore": false
                            },
                            "ActionSetOnFalse": {
                                "Name": "Action Set",
                                "ActionSetId": "963665f3-c7a4-3f1a-c7c8-13406db80757",
                                "Key": "963665f3-c7a4-3f1a-c7c8-13406db80757",
                                "Scope": 0,
                                "Actions": [],
                                "Notes": null,
                                "IsInAppStore": false
                            },
                            "Notes": "Comment",
                            "ActionId": 1,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Create Short Method URL",
                            "Domain": 0,
                            "InviteType": 1,
                            "ScreenId": "ce21824f-b5d2-4c00-b342-ab5ce4edb58a",
                            "ActiveRecordId": {
                                "ValueType": 10,
                                "Value": 8,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ActivityRecordId": null,
                            "CampaignRecordId": null,
                            "ContactRecordId": {
                                "ValueType": 10,
                                "Value": 7,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ResultToSet": {
                                "Source": null,
                                "ActionResultId": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "IsSharedResult": false,
                                "ActionResultName": "VariableName",
                                "ValidationMessages": []
                            },
                            "ControlToUpdate": null,
                            "Notes": "Comment",
                            "ActionId": 23,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Mapping Functions",
                            "MappingAction": 0,
                            "ViewNameFriendly": "viewContacts",
                            "MapWidget": null,
                            "AddressLine1": "AltPhone",
                            "AddressLine2": "AltPhone",
                            "AddressLine3": "AltPhone",
                            "City": "BillAddressAddr2",
                            "State": "BillAddressAddr3",
                            "PostalCode": "BillAddressAddr4",
                            "Country": "BillAddressAddr2",
                            "RecordIds": {
                                "ValueType": 0,
                                "Value": "2a47abc5-1626-1464-ee8c-e424dfee15f4",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "OptimizeRoute": false,
                            "UpdateRouteField": null,
                            "IsStartEndSpecified": false,
                            "Start": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "End": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "Notes": "Comment",
                            "ActionId": 47,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Merge Entities/Contacts",
                            "MergeType": 1,
                            "FromRecordID": {
                                "ValueType": 10,
                                "Value": 6,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ToRecordID": {
                                "ValueType": 10,
                                "Value": 7,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "AccountingRequested": false,
                            "Notes": "Comment",
                            "ActionId": 45,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Process Payment",
                            "ActionType": 0,
                            "Using": 0,
                            "AnalyticsPaymentAction": "Charge - UI Widget",
                            "Amount": {
                                "ValueType": 10,
                                "Value": 4,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Currency": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "CurrencyOption": "USD",
                            "EntityId": {
                                "ValueType": 10,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "ReferenceNumber": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "StoredPayment": {
                                "ValueType": 10,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "SaveCardOption": 0,
                            "ConfiguredPaymentMethods": 0,
                            "IsSpecificEntity": false,
                            "ActionResultGatewayResponse": {
                                "Source": null,
                                "ActionResultId": "81b7e419-71cc-ad00-c71a-05859fe1bfa6",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "ActionResultSuccessOrFail": {
                                "Source": null,
                                "ActionResultId": "ef1228ea-1d34-ce7f-424c-80359b27bc7d",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "ActionResultReferenceNumber": {
                                "Source": null,
                                "ActionResultId": "22ec3feb-e06f-f047-c713-cff5791fc841",
                                "IsSharedResult": false,
                                "ActionResultName": null,
                                "ValidationMessages": []
                            },
                            "Notes": "Comment",
                            "ActionId": 46,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Retrive Value From Email Gadget",
                            "Bindings": [
                                {
                                    "ValueName": 4,
                                    "ControlToUpdate": null,
                                    "ResultToSet": {
                                        "Source": null,
                                        "ActionResultId": "6b7df4b8-5bb9-bfff-9d47-8dcded228f30",
                                        "IsSharedResult": false,
                                        "ActionResultName": "CCName1",
                                        "ValidationMessages": []
                                    },
                                    "UpdateControl": false
                                }
                            ],
                            "Notes": "Comment",
                            "ActionId": 40,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Send Email",
                            "From": {
                                "ValueType": 9,
                                "Value": "jakemurray21@hotmail.com",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "FromName": {
                                "ValueType": 9,
                                "Value": "jake",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "To": {
                                "ValueType": 9,
                                "Value": "jakemurray21@hotmail.com",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "CC": null,
                            "BCC": null,
                            "Subject": {
                                "ValueType": 9,
                                "Value": "Subject to send",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Message": {
                                "ValueType": 9,
                                "Value": "body to send",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Priority": 1,
                            "Server": null,
                            "Username": null,
                            "Password": null,
                            "Port": null,
                            "Attachments": [],
                            "ContactRecordId": {
                                "ValueType": 9,
                                "Value": "4",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "BatchName": {
                                "ValueType": 9,
                                "Value": "VariableName",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "EmailType": 1,
                            "Notes": "Comment",
                            "ActionId": 18,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Send Mobile Push",
                            "ToUser": {
                                "ValueType": 10,
                                "Value": 4,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "RecordId": {
                                "ValueType": 10,
                                "Value": 0,
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "ScreenId": "dashboard",
                            "Title": {
                                "ValueType": 9,
                                "Value": "Notification Title",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Msg": {
                                "ValueType": 9,
                                "Value": "Notification Message",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Sound": "0",
                            "Priority": "0",
                            "Notes": "Comment",
                            "ActionId": 48,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Send Sms",
                            "PhoneTo": {
                                "ValueType": 9,
                                "Value": "6478212128",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Message": {
                                "ValueType": 9,
                                "Value": "This is the SMS message to send",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": null,
                                "FontStyles": null
                            },
                            "Notes": "Comment",
                            "ActionId": 49,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        },
                        {
                            "Type": "Stop Processing More Actions",
                            "Notes": "Comment",
                            "ActionId": 25,
                            "Disabled": false,
                            "InValid": false,
                            "ValidationMessages": [],
                            "Metadata": null
                        }
                    ],
                    "Notes": "",
                    "IsInAppStore": false
                }
            },
            "AppRef": "52eb4233-4a4d-4335-a412-a37e00c9f757",
            "appRibbonType": 0,
            "comments": "",
            "controls": [
                {
                    "Type": "LBL",
                    "displayTag": "p",
                    "formatRounding": "",
                    "formatSeparator": "",
                    "formatType": "",
                    "hrefFormat": "",
                    "icon": "mi-icon-circle-plus",
                    "iconAlign": "Left",
                    "isUsingNoWrap": false,
                    "showCurrency": false,
                    "allowUnsafeScripts": false,
                    "id": "8372f449-ee38-4eb0-89d0-6a23c0cf062f",
                    "name": "NewItem",
                    "isV4Control": false,
                    "TypeOverride": "LBL",
                    "isBound": false,
                    "IsComplexType": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "Text1",
                    "classes": "mi-color-primary",
                    "hideCaption": false,
                    "isOutputOnly": false,
                    "regularCaption": false,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "New Item",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": "a96ca85c-7342-4187-bfa6-1bbbafa8912a",
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "Type": "LBL",
                    "displayTag": "p",
                    "formatRounding": "",
                    "formatSeparator": "",
                    "formatType": "",
                    "hrefFormat": "",
                    "icon": "icon-chevron-left",
                    "iconAlign": "Left",
                    "isUsingNoWrap": false,
                    "showCurrency": false,
                    "allowUnsafeScripts": false,
                    "id": "dafcc511-ff8d-4bad-a541-8e6fcdd0fe4b",
                    "name": "Back",
                    "isV4Control": false,
                    "TypeOverride": "LBL",
                    "isBound": false,
                    "IsComplexType": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "Text",
                    "classes": "mi-icon-primary",
                    "hideCaption": false,
                    "isOutputOnly": false,
                    "regularCaption": false,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "Back",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": "265207c6-5652-4662-bde2-ddc3b9614ee3",
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "Type": "SEC",
                    "fixedClasses": "tbl",
                    "hasHeader": false,
                    "isCollapsed": false,
                    "isCollapsible": true,
                    "responsiveClasses": "",
                    "id": "968141fd-0476-4347-b73c-8ece414cd6cb",
                    "name": "SectionNav",
                    "isV4Control": false,
                    "TypeOverride": "SEC",
                    "isBound": false,
                    "IsComplexType": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "SectionNav",
                    "classes": "mi-cell-padding-left-1x mi-cell-padding-right-1x mi-cell-padding-top-1x mi-cell-padding-bottom-1x",
                    "hideCaption": true,
                    "isOutputOnly": false,
                    "regularCaption": true,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": null,
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "Type": "SEC",
                    "fixedClasses": "tbl",
                    "hasHeader": false,
                    "isCollapsed": false,
                    "isCollapsible": true,
                    "responsiveClasses": "",
                    "id": "cc35b42c-258a-46a3-9dbe-72ca50b2799b",
                    "name": "SectionList",
                    "isV4Control": false,
                    "TypeOverride": "SEC",
                    "isBound": false,
                    "IsComplexType": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "SectionList",
                    "classes": "",
                    "hideCaption": true,
                    "isOutputOnly": false,
                    "regularCaption": true,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": null,
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "Type": "GRD",
                    "IsComplexType": true,
                    "filterDef": [
                        {
                            "filterId": "f954679e-a6d4-4754-b6af-9763b3c6bfe2",
                            "filterName": "All Items",
                            "viewName": "Item",
                            "versionId": "824501b0-41ee-4602-9fbb-18afe4e1930b",
                            "searchString": null,
                            "isDefault": true,
                            "isHidden": false,
                            "state": 0,
                            "expression": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "ItemType",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 5,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Category",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "sorting": [
                                {
                                    "filterField": "FullName",
                                    "filterOrder": "asc"
                                }
                            ],
                            "hidden": [],
                            "visibleColumns": null
                        },
                        {
                            "filterId": "504cbe49-3c2b-4335-9066-680226209500",
                            "filterName": "Inventory Items",
                            "viewName": "Item",
                            "versionId": "824501b0-41ee-4602-9fbb-18afe4e1930b",
                            "searchString": null,
                            "isDefault": false,
                            "isHidden": false,
                            "state": 0,
                            "expression": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "ItemType",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 4,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Inventory",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "sorting": [
                                {
                                    "filterField": "FullName",
                                    "filterOrder": "asc"
                                }
                            ],
                            "hidden": [],
                            "visibleColumns": null
                        },
                        {
                            "filterId": "0e689983-065a-415f-92bc-3040e7a792ba",
                            "filterName": "Non Inventory Items",
                            "viewName": "Item",
                            "versionId": "824501b0-41ee-4602-9fbb-18afe4e1930b",
                            "searchString": null,
                            "isDefault": false,
                            "isHidden": false,
                            "state": 0,
                            "expression": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "ItemType",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 5,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Inventory",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "sorting": [
                                {
                                    "filterField": "FullName",
                                    "filterOrder": "asc"
                                }
                            ],
                            "hidden": [],
                            "visibleColumns": null
                        }
                    ],
                    "hideAdvSearch": false,
                    "hideColumnHeaders": false,
                    "hideNavigation": false,
                    "hideSearch": false,
                    "hideSettings": false,
                    "hidePerPageSelector": true,
                    "hideExport": false,
                    "hideMailChimp": true,
                    "hideViewsDropdown": false,
                    "hideGoToPage": false,
                    "isFixedLayout": false,
                    "isResponsive": false,
                    "model": {
                        "isAttached": true,
                        "isSearchable": false,
                        "isSelectable": false,
                        "isEditable": false,
                        "lastSelectedRecordId": 0,
                        "customViews": null,
                        "sharedViews": null,
                        "columnTotals": null,
                        "searchString": "",
                        "searchColumns": [
                            "True"
                        ],
                        "searchFilter": null,
                        "searchMetadataColumns": [],
                        "data": null,
                        "dataSource": [],
                        "unselectedRecords": null,
                        "caption": null,
                        "isAction": false,
                        "isDefaultLoaded": true,
                        "isCustomViewDefault": false,
                        "viewName": "Item",
                        "viewFilter": {
                            "filterId": "f954679e-a6d4-4754-b6af-9763b3c6bfe2",
                            "filterName": "All Items",
                            "viewName": "Item",
                            "versionId": "824501b0-41ee-4602-9fbb-18afe4e1930b",
                            "searchString": null,
                            "isDefault": true,
                            "isHidden": false,
                            "state": 0,
                            "expression": [
                                {
                                    "Operation": 0,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 3,
                                        "Value": "ItemType",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 5,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": null,
                                    "DateField": null,
                                    "Source": {
                                        "ValueType": 9,
                                        "Value": "Category",
                                        "Property": null,
                                        "ChildProperty": null,
                                        "ValidationMessage": null,
                                        "FontStyles": null
                                    },
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                },
                                {
                                    "Operation": 1,
                                    "DateField": null,
                                    "Source": null,
                                    "AdditionalSources": null,
                                    "DateWhere": null
                                }
                            ],
                            "sorting": [
                                {
                                    "filterField": "FullName",
                                    "filterOrder": "asc"
                                }
                            ],
                            "hidden": [],
                            "visibleColumns": null
                        },
                        "distinct": false,
                        "columns": [
                            {
                                "name": "RecordID",
                                "caption": "Record ID",
                                "isKey": true,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": false,
                                    "width": {
                                        "value": "120",
                                        "type": 0,
                                        "mvalue": "",
                                        "mtype": 0
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": false,
                                    "alignment": "right",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": "",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 0,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "Sku",
                                "caption": "Item Code",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": true,
                                    "width": {
                                        "value": "15",
                                        "type": 1,
                                        "mvalue": null,
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": null,
                                        "color": null
                                    },
                                    "visiblemobile": true,
                                    "alignment": "left",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": null,
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 0,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "FullName",
                                "caption": "Item Name",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": true,
                                    "width": {
                                        "value": "20",
                                        "type": 1,
                                        "mvalue": "",
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": true,
                                    "alignment": "left",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": "",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 0,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "SalesDesc",
                                "caption": "Description",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": true,
                                    "width": {
                                        "value": "20",
                                        "type": 1,
                                        "mvalue": "",
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": false,
                                    "alignment": "left",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": "",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 0,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "IncomeAccount",
                                "caption": "Account",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": false,
                                    "width": {
                                        "value": "15",
                                        "type": 1,
                                        "mvalue": "",
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": false,
                                    "alignment": "left",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": "",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 8,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "QuantityOnHand",
                                "caption": "On Hand",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": true,
                                    "width": {
                                        "value": "10",
                                        "type": 1,
                                        "mvalue": "",
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": false,
                                    "alignment": "right",
                                    "formatType": "Number",
                                    "formatRounding": "0",
                                    "formatSeparator": "Yes",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 1,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "SalesPrice",
                                "caption": "Price",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": true,
                                    "width": {
                                        "value": "10",
                                        "type": 1,
                                        "mvalue": "",
                                        "mtype": 1
                                    },
                                    "icon": {
                                        "name": "",
                                        "color": "normal"
                                    },
                                    "visiblemobile": true,
                                    "alignment": "right",
                                    "formatType": "Number",
                                    "formatRounding": "2",
                                    "formatSeparator": "Yes",
                                    "hidecaption": false
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 4,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            },
                            {
                                "name": "ItemType",
                                "caption": "ItemType",
                                "isKey": false,
                                "columnType": 0,
                                "width": 0,
                                "format": {
                                    "display": 0,
                                    "visible": false,
                                    "width": {
                                        "value": null,
                                        "type": 0,
                                        "mvalue": null,
                                        "mtype": 0
                                    },
                                    "icon": {
                                        "name": null,
                                        "color": null
                                    },
                                    "visiblemobile": false,
                                    "alignment": "left",
                                    "formatType": "",
                                    "formatRounding": null,
                                    "formatSeparator": null,
                                    "hidecaption": true
                                },
                                "cardColumnFields": null,
                                "hasSubtotal": false,
                                "subtotal": 0.0,
                                "ignore": false,
                                "isLinked": false,
                                "tableNameRef": null,
                                "IsRequired": false,
                                "IsUnique": false,
                                "Size": 0,
                                "Id": 0,
                                "LinkedFieldCaption": null,
                                "LinkedJoinFromTable": null,
                                "LinkedJoinFromPrimary": null,
                                "LinkedViaField": null,
                                "CompareName": null,
                                "DisplayValueFromTableName": null,
                                "DisplayValueFromFieldName": null,
                                "DisplayValueFromViewFriendlyName": null,
                                "MaxSize": 0,
                                "IsComplexField": false,
                                "ParentFieldName": null,
                                "ParentFieldType": null,
                                "ElementType": null,
                                "ElementSeq": null,
                                "Elements": null,
                                "fieldType": 0,
                                "onClick": null,
                                "expression": [],
                                "aggregate": null,
                                "dateGroupBy": null,
                                "validationRules": null
                            }
                        ],
                        "sorting": null,
                        "paging": {
                            "pageNumber": 1,
                            "pageSize": 10,
                            "totalRows": 0
                        },
                        "selectAll": false,
                        "selectedRecords": []
                    },
                    "onActiveRowChange": "c88a3dde-38f9-4f56-845e-f3f0f92a8ea1",
                    "onLoad": null,
                    "prevPaging": null,
                    "prevSorting": null,
                    "enableSorting": true,
                    "id": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                    "name": "QuickBooksItemList",
                    "isV4Control": false,
                    "TypeOverride": "GRD",
                    "isBound": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "QuickBooksItemList",
                    "classes": "mi-grid-header-white mi-grid-top-border-none mi-grid-bottom-border-none mi-grid-left-border-none mi-grid-right-border-none mi-grid-footer-color-white",
                    "hideCaption": true,
                    "isOutputOnly": false,
                    "regularCaption": true,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": null,
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "Type": "BTN",
                    "Class": "mi-button",
                    "icon": "",
                    "iconAlign": "Left",
                    "defaultValue": "Button",
                    "id": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                    "name": "Button",
                    "isV4Control": false,
                    "TypeOverride": "BTN",
                    "isBound": false,
                    "IsComplexType": false,
                    "FieldType": 0,
                    "value": "Button",
                    "caption": "Button",
                    "classes": "",
                    "hideCaption": false,
                    "isOutputOnly": false,
                    "regularCaption": false,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "onBlur": null,
                    "onChange": null,
                    "onClick": "31cac327-e87c-f935-7d82-a7de721452a9",
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                },
                {
                    "columnTotals": [],
                    "Type": "EDT",
                    "IsComplexType": true,
                    "viewList": [
                        {
                            "name": "View 1",
                            "id": "88b54b09-8512-f1fb-2247-730ce8948264",
                            "columns": [
                                {
                                    "field": "RecordID",
                                    "visible": true
                                },
                                {
                                    "field": "Sku",
                                    "visible": true
                                }
                            ],
                            "sorting": [],
                            "filtering": [],
                            "enableDynamicDates": false
                        }
                    ],
                    "viewFriendlyName": "Item",
                    "defaultViewFilter": "88b54b09-8512-f1fb-2247-730ce8948264",
                    "columns": [
                        {
                            "controlId": "487d2d08-5773-4128-33f4-85ebd431d045",
                            "header": "RecordID",
                            "field": "RecordID",
                            "fieldType": 2,
                            "columnType": 0,
                            "onChangeEvent": null,
                            "defaultValue": {
                                "ValueType": 9,
                                "Value": "",
                                "Property": "",
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "readOnly": true,
                            "canDelete": false,
                            "isLocked": true,
                            "cardColumnFields": null,
                            "showOnMobile": false,
                            "format": {
                                "width": "md",
                                "widthFixed": null,
                                "alignment": "left",
                                "type": null,
                                "rounding": null,
                                "separator": "Yes",
                                "decimalPoint": null,
                                "thousands": null,
                                "money": null,
                                "dateType": null,
                                "headerAlignment": null,
                                "fontSize": null,
                                "textColor": null,
                                "backgroundColor": null,
                                "visible": true,
                                "disabled": false
                            },
                            "validationRules": [
                                {
                                    "rule": 0,
                                    "value": null,
                                    "canDelete": false
                                }
                            ],
                            "control": null,
                            "expression": null,
                            "hasColumnTotal": false,
                            "displayField": "RecordID"
                        },
                        {
                            "controlId": "ecc1eb2a-a759-724e-16c5-4fa120342c7f",
                            "header": "Sku",
                            "field": "Sku",
                            "fieldType": 0,
                            "columnType": 0,
                            "onChangeEvent": null,
                            "defaultValue": {
                                "ValueType": 9,
                                "Value": null,
                                "Property": null,
                                "ChildProperty": null,
                                "ValidationMessage": "",
                                "FontStyles": null
                            },
                            "readOnly": false,
                            "canDelete": false,
                            "isLocked": false,
                            "cardColumnFields": null,
                            "showOnMobile": false,
                            "format": {
                                "width": "md",
                                "widthFixed": null,
                                "alignment": "left",
                                "type": null,
                                "rounding": null,
                                "separator": null,
                                "decimalPoint": null,
                                "thousands": null,
                                "money": null,
                                "dateType": null,
                                "headerAlignment": null,
                                "fontSize": null,
                                "textColor": null,
                                "backgroundColor": null,
                                "visible": true,
                                "disabled": false
                            },
                            "validationRules": [
                                {
                                    "rule": 0,
                                    "value": null,
                                    "canDelete": false
                                }
                            ],
                            "control": null,
                            "expression": null,
                            "hasColumnTotal": false,
                            "displayField": "Sku"
                        }
                    ],
                    "isSearchable": false,
                    "isSelectable": false,
                    "hideViewSelector": false,
                    "showDividers": true,
                    "hasZebraStripes": true,
                    "addLabel": "Add lines",
                    "isReadOnly": false,
                    "canAddMoreRows": true,
                    "newRowsCount": 3,
                    "showDeleteColumn": true,
                    "showDeleteConfirmation": false,
                    "showGoToPage": true,
                    "onActiveRowChange": null,
                    "paging": {
                        "pageNumber": 1,
                        "pageSize": 1000,
                        "totalRows": 0
                    },
                    "showExport": false,
                    "showSort": true,
                    "showRefresh": false,
                    "canReorderColumns": false,
                    "canReorderRows": false,
                    "viewFilter": "00000000-0000-0000-0000-000000000000",
                    "sorting": null,
                    "selectionInfo": {
                        "allExcept": false,
                        "recordIDs": []
                    },
                    "searchString": null,
                    "searchFilter": null,
                    "dataSource": [],
                    "actionButtonLabel": null,
                    "onActionButtonClick": null,
                    "hideAdvSearch": false,
                    "hideColumnHeaders": false,
                    "hideNavigation": false,
                    "hideSearch": false,
                    "hideViewsDropdown": false,
                    "newRow": null,
                    "dataModelId": null,
                    "projections": null,
                    "id": "1e6b19cb-4c88-f41a-a585-eba893b8b676",
                    "name": "EditableGrid",
                    "isV4Control": false,
                    "TypeOverride": "EDT",
                    "isBound": false,
                    "FieldType": 0,
                    "value": null,
                    "caption": "EditableGrid",
                    "classes": "",
                    "hideCaption": true,
                    "isOutputOnly": false,
                    "regularCaption": true,
                    "width": "",
                    "widthType": "auto",
                    "visible": true,
                    "disabled": false,
                    "defaultValue": "",
                    "onBlur": null,
                    "onChange": null,
                    "onClick": null,
                    "onFocus": null,
                    "validationRules": null,
                    "validationError": null
                }
            ],
            "createdBy": "Jake",
            "draftVersion": "81fb70d3-e23d-4e06-93ae-967fd1d873bc",
            "draftVersionCount": 1,
            "draftVersionLastModifiedDate": "2024-09-19T22:39:41.538Z",
            "draftVersionNumber": 2,
            "events": {
                "265207c6-5652-4662-bde2-ddc3b9614ee3": [
                    "14468a5c-8ade-4ca6-8962-e96e6b784fd3"
                ],
                "a96ca85c-7342-4187-bfa6-1bbbafa8912a": [
                    "b9330125-37a3-499c-a0bd-6a7983c638f1"
                ],
                "c88a3dde-38f9-4f56-845e-f3f0f92a8ea1": [
                    "a5504326-6d81-4c98-b80d-0b2dd8b8194c"
                ],
                "31cac327-e87c-f935-7d82-a7de721452a9": [
                    "af345967-8104-4f39-bdff-0b6831176a0d"
                ]
            },
            "fields": [
                {
                    "AccVersion": null,
                    "caption": "AlertLevel",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "AlertLevel",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "AssetAccount",
                    "dropdown_fieldName": "FullName",
                    "dropdown_viewNameFriendly": "Account",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 159,
                    "name": "AssetAccount",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "AssetAccount_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "AssetAccount_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "AverageCost",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "AverageCost",
                    "type": 4
                },
                {
                    "AccVersion": null,
                    "caption": "COGSAccount",
                    "dropdown_fieldName": "FullName",
                    "dropdown_viewNameFriendly": "Account",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 159,
                    "name": "COGSAccount",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "COGSAccount_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "COGSAccount_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "CriticalLevel",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "CriticalLevel",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "EditSequence",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": true,
                    "isRequired": false,
                    "maxSize": 50,
                    "name": "EditSequence",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "EstHrs",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "EstHrs",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "FullName",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 1000,
                    "name": "FullName",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "IncomeAccount",
                    "dropdown_fieldName": "FullName",
                    "dropdown_viewNameFriendly": "Account",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IncomeAccount",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "IncomeAccount_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IncomeAccount_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "InventoryControlAutoBinSelection",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "InventoryControlAutoBinSelection",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": -1,
                    "name": "InventoryControlAutoBinSelection",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "InventoryControlAutoBinSelection_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "InventoryControlAutoBinSelection_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "InvStartDate",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "InvStartDate",
                    "type": 3
                },
                {
                    "AccVersion": null,
                    "caption": "IsActive",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsActive",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsAvailableForReorder",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsAvailableForReorder",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsNotNPDonation",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsNotNPDonation",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsPricePercent",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsPricePercent",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsPrintItemsInGroup",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsPrintItemsInGroup",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsSalesAndPurchase",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsSalesAndPurchase",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsSerialTrackingRequired",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "IsSerialTrackingRequired",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsTaxIncluded",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsTaxIncluded",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsTrackQtyOnHand",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": true,
                    "maxSize": 0,
                    "name": "IsTrackQtyOnHand",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsUsedOnPurchaseTransaction",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsUsedOnPurchaseTransaction",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "IsUsedOnSalesTransaction",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "IsUsedOnSalesTransaction",
                    "type": 5
                },
                {
                    "AccVersion": null,
                    "caption": "ItemHeight",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "ItemHeight",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "ItemLength",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "ItemLength",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "ItemType",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": true,
                    "maxSize": 20,
                    "name": "ItemType",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "ItemWeight",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "ItemWeight",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "ItemWidth",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "ItemWidth",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "LastModifiedDate",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "LastModifiedDate",
                    "type": 3
                },
                {
                    "AccVersion": null,
                    "caption": "LeadTime",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "LeadTime",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "LeadTimeFixed",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "LeadTimeFixed",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "ListID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 100,
                    "name": "ListID",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "LotSizeMinimum",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "LotSizeMinimum",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "LotSizeMultiple",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 2,
                    "name": "LotSizeMultiple",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "LowLevelCode",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "LowLevelCode",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "ManufacturerPartNumber",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 31,
                    "name": "ManufacturerPartNumber",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "MFGLeadTimeUOM",
                    "dropdown_fieldName": "LeadTimeUOM",
                    "dropdown_viewNameFriendly": "MFGLeadTimeUOM",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 50,
                    "name": "MFGLeadTimeUOM",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "MFGLeadTimeUOM_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "MFGLeadTimeUOM_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "MonitorLevel",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "MonitorLevel",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "Name",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 50,
                    "name": "Name",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "ParentFullName",
                    "dropdown_fieldName": "FullName",
                    "dropdown_viewNameFriendly": "Item",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "ParentFullName",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "ParentFullName_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "ParentFullName_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "PrefVendor",
                    "dropdown_fieldName": "FullName",
                    "dropdown_viewNameFriendly": "Entity",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PrefVendor",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "PrefVendor_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PrefVendor_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "PriceInclusive",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PriceInclusive",
                    "type": 4
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseCost",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseCost",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseCostInclusive",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseCostInclusive",
                    "type": 4
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseDesc",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 4000,
                    "name": "PurchaseDesc",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseTaxCalculation",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "TaxCalculationType",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseTaxCalculation",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseTaxCalculation_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseTaxCalculation_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseTaxCode",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "SalesTaxCode",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseTaxCode",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "PurchaseTaxCode_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "PurchaseTaxCode_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "QuantityOnHand",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "QuantityOnHand",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "QuantityOnOrder",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "QuantityOnOrder",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "QuantityOnSalesOrder",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "QuantityOnSalesOrder",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": true,
                    "maxSize": 0,
                    "name": "RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "ReorderPoint",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "ReorderPoint",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "ReplenishLevel",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 255,
                    "name": "ReplenishLevel",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "SalesDesc",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 4000,
                    "name": "SalesDesc",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "SalesPrice",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "SalesPrice",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "SalesTaxCode",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "SalesTaxCode",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 3,
                    "name": "SalesTaxCode",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "SalesTaxCode_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "SalesTaxCode_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "Sku",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 30,
                    "name": "Sku",
                    "type": 0
                },
                {
                    "AccVersion": null,
                    "caption": "Sublevel",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "Sublevel",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "TaxCalculation",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "TaxCalculationType",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TaxCalculation",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "TaxCalculation_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TaxCalculation_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "TaxClassification",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": "TaxClassification",
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TaxClassification",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "TaxClassification_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TaxClassification_RecordID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "TaxRate",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TaxRate",
                    "type": 1
                },
                {
                    "AccVersion": null,
                    "caption": "TenantID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TenantID",
                    "type": 2
                },
                {
                    "AccVersion": null,
                    "caption": "TimeCreated",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": true,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TimeCreated",
                    "type": 3
                },
                {
                    "AccVersion": null,
                    "caption": "TimeModifiedAccounting",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "TimeModifiedAccounting",
                    "type": 3
                },
                {
                    "AccVersion": null,
                    "caption": "UnitOfMeasureSet",
                    "dropdown_fieldName": "Name",
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "UnitOfMeasureSet",
                    "type": 8
                },
                {
                    "AccVersion": null,
                    "caption": "UnitOfMeasureSet_RecordID",
                    "dropdown_fieldName": null,
                    "dropdown_viewNameFriendly": null,
                    "isOutputOnly": false,
                    "isRequired": false,
                    "maxSize": 0,
                    "name": "UnitOfMeasureSet_RecordID",
                    "type": 2
                }
            ],
            "focusControl": "",
            "id": "e40bc228-b385-4743-816f-9fc39f25ffb3",
            "isDeveloper": false,
            "isScreenlet": false,
            "isShared": false,
            "layout": {
                "Id": "00000000-0000-0000-0000-000000000000",
                "Type": "L-SCR",
                "LegacyClass": null,
                "LegacyDataWidth": null,
                "LegacyDataHeight": null,
                "TypeOverride": null,
                "LegacyChildClass": null,
                "Content": [
                    {
                        "Id": "968141fd-0476-4347-b73c-8ece414cd6cb",
                        "Type": "L-SEC",
                        "LegacyClass": "mi-Section mi-cell-padding-left-1x mi-cell-padding-right-1x mi-cell-padding-top-1x mi-cell-padding-bottom-1x",
                        "LegacyDataWidth": null,
                        "LegacyDataHeight": null,
                        "TypeOverride": null,
                        "LegacyChildClass": "tbl  ",
                        "Content": [
                            {
                                "Id": "edb8fcca-0f24-49f9-a5c3-e0b31683dbf1",
                                "Type": "L-ROW",
                                "LegacyClass": "tblrow",
                                "LegacyDataWidth": null,
                                "LegacyDataHeight": null,
                                "TypeOverride": null,
                                "LegacyChildClass": null,
                                "Content": [
                                    {
                                        "Id": "2a4b3f7a-a4f9-4d97-9ac3-b5cc441873b1",
                                        "Type": "L-COL",
                                        "LegacyClass": "tblcell",
                                        "LegacyDataWidth": "",
                                        "LegacyDataHeight": "",
                                        "TypeOverride": null,
                                        "LegacyChildClass": null,
                                        "Content": [
                                            {
                                                "Id": "dafcc511-ff8d-4bad-a541-8e6fcdd0fe4b",
                                                "Type": "LBL",
                                                "LegacyClass": null,
                                                "LegacyDataWidth": null,
                                                "LegacyDataHeight": null,
                                                "TypeOverride": "LBL",
                                                "LegacyChildClass": null,
                                                "Content": null
                                            }
                                        ]
                                    },
                                    {
                                        "Id": "459f06e4-a117-4ee5-a581-22deb1b940ef",
                                        "Type": "L-COL",
                                        "LegacyClass": "tblcell cell-top-pull-right",
                                        "LegacyDataWidth": "",
                                        "LegacyDataHeight": "",
                                        "TypeOverride": null,
                                        "LegacyChildClass": null,
                                        "Content": [
                                            {
                                                "Id": "8372f449-ee38-4eb0-89d0-6a23c0cf062f",
                                                "Type": "LBL",
                                                "LegacyClass": null,
                                                "LegacyDataWidth": null,
                                                "LegacyDataHeight": null,
                                                "TypeOverride": "LBL",
                                                "LegacyChildClass": null,
                                                "Content": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "Id": "cc35b42c-258a-46a3-9dbe-72ca50b2799b",
                        "Type": "L-SEC",
                        "LegacyClass": "mi-Section",
                        "LegacyDataWidth": null,
                        "LegacyDataHeight": null,
                        "TypeOverride": null,
                        "LegacyChildClass": "tbl  ",
                        "Content": [
                            {
                                "Id": "b3a58861-64cc-414d-a7b7-f71133ed22e2",
                                "Type": "L-ROW",
                                "LegacyClass": "tblrow",
                                "LegacyDataWidth": null,
                                "LegacyDataHeight": null,
                                "TypeOverride": null,
                                "LegacyChildClass": null,
                                "Content": [
                                    {
                                        "Id": "ec4b6cee-4070-4e5f-9c54-d98b700a9e2d",
                                        "Type": "L-COL",
                                        "LegacyClass": "tblcell",
                                        "LegacyDataWidth": null,
                                        "LegacyDataHeight": null,
                                        "TypeOverride": null,
                                        "LegacyChildClass": null,
                                        "Content": [
                                            {
                                                "Id": "6fd0ba2f-484f-4ccd-a341-304ad8e006ba",
                                                "Type": "GRD",
                                                "LegacyClass": null,
                                                "LegacyDataWidth": null,
                                                "LegacyDataHeight": null,
                                                "TypeOverride": "GRD",
                                                "LegacyChildClass": null,
                                                "Content": null
                                            },
                                            {
                                                "Id": "5e2c8f83-1982-e7f3-62ff-6eac353c8528",
                                                "Type": "BTN",
                                                "LegacyClass": null,
                                                "LegacyDataWidth": null,
                                                "LegacyDataHeight": null,
                                                "TypeOverride": "BTN",
                                                "LegacyChildClass": null,
                                                "Content": null
                                            },
                                            {
                                                "Id": "1e6b19cb-4c88-f41a-a585-eba893b8b676",
                                                "Type": "EDT",
                                                "LegacyClass": null,
                                                "LegacyDataWidth": null,
                                                "LegacyDataHeight": null,
                                                "TypeOverride": "EDT",
                                                "LegacyChildClass": null,
                                                "Content": null
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            "layoutHTML": "<div class=\"mi-Section mi-cell-padding-left-1x mi-cell-padding-right-1x mi-cell-padding-top-1x mi-cell-padding-bottom-1x\" id=\"968141fd-0476-4347-b73c-8ece414cd6cb\" method_type=\"SEC\">                            <div class=\"ui-draggable-handle mi-SectionHeader\" style=\"display: none;\"><span class=\"mi-section-header-caption\">SectionNav</span><span class=\"mi-section-collapsible\"><i class=\"mi-icon-chevron-down\"></i></span></div>                            <div class=\"mi-SectionBody\">                                <div class=\"tbl  \" id=\"Section1\">                                    <div class=\"tblrow\">                                        <div class=\"tblcell\" data-height=\"\" data-width=\"\"><div class=\"ui-draggable-handle control\" method_type=\"LBL\" id=\"dafcc511-ff8d-4bad-a541-8e6fcdd0fe4b\"></div></div>                                    <div class=\"tblcell cell-top-pull-right\" data-align=\"right\" data-collapse=\"false\" data-height=\"\" data-width=\"\"><div class=\"ui-draggable-handle control\" method_type=\"LBL\" id=\"8372f449-ee38-4eb0-89d0-6a23c0cf062f\"></div></div></div>                                </div>                            </div>                        </div><div class=\"mi-Section\" id=\"cc35b42c-258a-46a3-9dbe-72ca50b2799b\" method_type=\"SEC\">\n        <div class=\"ui-draggable-handle mi-SectionHeader\" style=\"display: none;\"><span class=\"mi-section-header-caption\">SectionList</span><span class=\"mi-section-collapsible\"><i class=\"mi-icon-chevron-down\"></i></span></div>\n        <div class=\"mi-SectionBody\">\n            <div class=\"tbl  \">\n                <div class=\"tblrow\">\n                    <div class=\"tblcell\">\n                        <div class=\"ui-draggable-handle control\" method_type=\"GRD\" id=\"6fd0ba2f-484f-4ccd-a341-304ad8e006ba\"></div><div class=\"ui-draggable-handle control\" method_type=\"BTN\" id=\"5e2c8f83-1982-e7f3-62ff-6eac353c8528\"></div><div class=\"ui-draggable-handle control\" method_type=\"EDT\" id=\"1e6b19cb-4c88-f41a-a585-eba893b8b676\"></div>\n                    </div>\n                </div>\n             </div>\n        </div>\n    </div>",
            "modifiedBy": "Jake",
            "name": "Items List(2)",
            "onActiveRecordChange": null,
            "onFocus": null,
            "onLoad": null,
            "operationMode": 1,
            "ScreenLastModifiedDate": "2024-09-19T22:39:41.538Z",
            "screenMode": "TEST",
            "Type": "SCD",
            "versionId": "81fb70d3-e23d-4e06-93ae-967fd1d873bc",
            "VersionLastModifyDate": "2024-09-19T22:39:41.538Z",
            "versionNumber": 2,
            "versionTarget": 4,
            "viewFilter": null,
            "viewFriendlyName": "Item"
        },
        "versionList": {
            "3055ed30-7514-42c5-9595-190c84c95076": "Ver.1 - 09/05/2024 13:17:15",
            "81fb70d3-e23d-4e06-93ae-967fd1d873bc": "Ver.2 - 09/19/2024 18:39:41"
        }
    },
    "IsSuccess": true,
    "Message": null,
    "Status": 0
};