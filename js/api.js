{
    "name": "Salient Business",
    "description": "Just another WordPress site",
    "url": "http:\/\/themenectar.com\/demo\/salient-business",
    "home": "http:\/\/themenectar.com\/demo\/salient-business",
    "gmt_offset": "0",
    "timezone_string": "",
    "namespaces": ["oembed\/1.0", "wc\/v1", "wc\/v2", "wp\/v2"],
    "authentication": [],
    "routes": {
        "\/": {
            "namespace": "",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/"
            }
        },
        "\/oembed\/1.0": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "oembed\/1.0"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/oembed\/1.0"
            }
        },
        "\/oembed\/1.0\/embed": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true
                    },
                    "format": {
                        "required": false,
                        "default": "json"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/oembed\/1.0\/embed"
            }
        },
        "\/oembed\/1.0\/proxy": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true,
                        "description": "The URL of the resource for which to fetch oEmbed data.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "default": "json",
                        "enum": ["json", "xml"],
                        "description": "The oEmbed format to use.",
                        "type": "string"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600,
                        "description": "The maximum width of the embed frame in pixels.",
                        "type": "integer"
                    },
                    "maxheight": {
                        "required": false,
                        "description": "The maximum height of the embed frame in pixels.",
                        "type": "integer"
                    },
                    "discover": {
                        "required": false,
                        "default": true,
                        "description": "Whether to perform an oEmbed discovery request for non-whitelisted providers.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/oembed\/1.0\/proxy"
            }
        },
        "\/wc\/v1": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wc\/v1"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1"
            }
        },
        "\/wc\/v1\/coupons": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "filter": {
                        "required": false,
                        "description": "Use WP Query arguments to modify the response; private query vars require appropriate authorization.",
                        "type": "object"
                    },
                    "code": {
                        "required": false,
                        "description": "Limit result set to resources with a specific code.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "code": {
                        "required": true,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "default": "fixed_cart",
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "expiry_date": {
                        "required": false,
                        "description": "UTC DateTime when the coupon expires.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "default": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "default": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "default": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/coupons"
            }
        },
        "\/wc\/v1\/coupons\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "code": {
                        "required": false,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "expiry_date": {
                        "required": false,
                        "description": "UTC DateTime when the coupon expires.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/coupons\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "code": {
                        "required": false,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "expiry_date": {
                        "required": false,
                        "description": "UTC DateTime when the coupon expires.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/coupons\/batch"
            }
        },
        "\/wc\/v1\/customers\/(?P<customer_id>[\\d]+)\/downloads": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "customer_id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v1\/customers": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Limit result set to resources with a specific email.",
                        "type": "string"
                    },
                    "role": {
                        "required": false,
                        "default": "customer",
                        "enum": ["all", "administrator", "editor", "author", "contributor", "subscriber", "customer", "shop_manager"],
                        "description": "Limit result set to resources with a specific role.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "email": {
                        "required": true,
                        "description": "New user email address.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "New user username.",
                        "type": "string"
                    },
                    "password": {
                        "required": true,
                        "description": "New user password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/customers"
            }
        },
        "\/wc\/v1\/customers\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the customer.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "Customer login name.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Customer password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": false,
                        "default": 0,
                        "description": "ID to reassign posts to.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v1\/customers\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "email": {
                        "required": false,
                        "description": "The email address for the customer.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "Customer login name.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Customer password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/customers\/batch"
            }
        },
        "\/wc\/v1\/orders\/(?P<order_id>[\\d]+)\/notes": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "note": {
                        "required": true,
                        "description": "Order note content.",
                        "type": "string"
                    },
                    "customer_note": {
                        "required": false,
                        "default": false,
                        "description": "Shows\/define if the note is only for reference or for the customer (the user will be notified).",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/orders\/(?P<order_id>[\\d]+)\/notes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/orders\/(?P<order_id>[\\d]+)\/refunds": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "filter": {
                        "required": false,
                        "description": "Use WP Query arguments to modify the response; private query vars require appropriate authorization.",
                        "type": "object"
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Limit result set to orders assigned a specific status.",
                        "type": "string"
                    },
                    "customer": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific customer.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific product.",
                        "type": "integer"
                    },
                    "dp": {
                        "required": false,
                        "default": 2,
                        "description": "Number of decimal points to use in each resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "amount": {
                        "required": false,
                        "description": "Refund amount.",
                        "type": "string"
                    },
                    "reason": {
                        "required": false,
                        "description": "Reason for refund.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v1\/orders\/(?P<order_id>[\\d]+)\/refunds\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": true,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/orders": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "filter": {
                        "required": false,
                        "description": "Use WP Query arguments to modify the response; private query vars require appropriate authorization.",
                        "type": "object"
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Limit result set to orders assigned a specific status.",
                        "type": "string"
                    },
                    "customer": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific customer.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific product.",
                        "type": "integer"
                    },
                    "dp": {
                        "required": false,
                        "default": 2,
                        "description": "Number of decimal points to use in each resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "default": "pending",
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "default": "USD",
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "default": 0,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "set_paid": {
                        "required": false,
                        "default": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta": {
                                    "description": "Line item meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "label": {
                                                "description": "Meta label.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/orders"
            }
        },
        "\/wc\/v1\/orders\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "set_paid": {
                        "required": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta": {
                                    "description": "Line item meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "label": {
                                                "description": "Meta label.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/orders\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "set_paid": {
                        "required": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta": {
                                    "description": "Line item meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "label": {
                                                "description": "Meta label.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/orders\/batch"
            }
        },
        "\/wc\/v1\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific parent.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Term name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Term name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/attributes": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "select",
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "default": "menu_order",
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "default": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/attributes"
            }
        },
        "\/wc\/v1\/products\/attributes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Attribute name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": true,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/attributes\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Attribute name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/attributes\/batch"
            }
        },
        "\/wc\/v1\/products\/categories": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific parent.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "default": "default",
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/categories"
            }
        },
        "\/wc\/v1\/products\/categories\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Category name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/categories\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Category name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/categories\/batch"
            }
        },
        "\/wc\/v1\/products\/(?P<product_id>[\\d]+)\/reviews": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "review": {
                        "required": true,
                        "description": "Review content.",
                        "type": "string"
                    },
                    "date_created": {
                        "required": false,
                        "description": "The date the review was created, in the site's timezone.",
                        "type": "date-time"
                    },
                    "rating": {
                        "required": false,
                        "description": "Review rating (0 to 5).",
                        "type": "integer"
                    },
                    "name": {
                        "required": true,
                        "description": "Name of the reviewer.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "Email of the reviewer.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/(?P<product_id>[\\d]+)\/reviews\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "review": {
                        "required": false,
                        "description": "The content of the review.",
                        "type": "string"
                    },
                    "date_created": {
                        "required": false,
                        "description": "The date the review was created, in the site's timezone.",
                        "type": "date-time"
                    },
                    "rating": {
                        "required": false,
                        "description": "Review rating (0 to 5).",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Reviewer name.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Reviewer email.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/shipping_classes": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/shipping_classes"
            }
        },
        "\/wc\/v1\/products\/shipping_classes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Shipping class name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/shipping_classes\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Shipping class name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/shipping_classes\/batch"
            }
        },
        "\/wc\/v1\/products\/tags": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/tags"
            }
        },
        "\/wc\/v1\/products\/tags\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Tag name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/tags\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Tag name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/tags\/batch"
            }
        },
        "\/wc\/v1\/products": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "filter": {
                        "required": false,
                        "description": "Use WP Query arguments to modify the response; private query vars require appropriate authorization.",
                        "type": "object"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to products with a specific slug.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "draft", "pending", "private", "publish"],
                        "description": "Limit result set to products assigned a specific status.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Limit result set to products assigned a specific type.",
                        "type": "string"
                    },
                    "category": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific category ID.",
                        "type": "string"
                    },
                    "tag": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific tag ID.",
                        "type": "string"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific shipping class ID.",
                        "type": "string"
                    },
                    "attribute": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute.",
                        "type": "string"
                    },
                    "attribute_term": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute term ID (required an assigned attribute).",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Limit result set to products with a specific SKU.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "simple",
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "default": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "default": "visible",
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price.",
                        "type": "string"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price.",
                        "type": "string"
                    },
                    "virtual": {
                        "required": false,
                        "default": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "default": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "default": -1,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "default": -1,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "download_type": {
                        "required": false,
                        "default": "standard",
                        "enum": ["standard"],
                        "description": "Download type, this controls the schema on the front-end.",
                        "type": "string"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "default": "taxable",
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "default": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "default": true,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "default": "no",
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "default": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "default": true,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of upsell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "object",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "variations": {
                        "required": false,
                        "description": "List of variations.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Variation ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created": {
                                    "description": "The date the variation was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the variation was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "permalink": {
                                    "description": "Variation URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Unique identifier.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "price": {
                                    "description": "Current variation price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "regular_price": {
                                    "description": "Variation regular price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "sale_price": {
                                    "description": "Variation sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_from": {
                                    "description": "Start date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_to": {
                                    "description": "End date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "on_sale": {
                                    "description": "Shows if the variation is on sale.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "purchasable": {
                                    "description": "Shows if the variation can be bought.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "visible": {
                                    "description": "If the variation is visible.",
                                    "type": "boolean",
                                    "context": ["view", "edit"]
                                },
                                "virtual": {
                                    "description": "If the variation is virtual.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloadable": {
                                    "description": "If the variation is downloadable.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloads": {
                                    "description": "List of downloadable files.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "File MD5 hash.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "name": {
                                                "description": "File name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "file": {
                                                "description": "File URL.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "download_limit": {
                                    "description": "Number of times downloadable files can be downloaded after purchase.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "download_expiry": {
                                    "description": "Number of days until access to downloadable files expires.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status.",
                                    "type": "string",
                                    "default": "taxable",
                                    "enum": ["taxable", "shipping", "none"],
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "manage_stock": {
                                    "description": "Stock management at variation level.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "stock_quantity": {
                                    "description": "Stock quantity.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "in_stock": {
                                    "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                                    "type": "boolean",
                                    "default": true,
                                    "context": ["view", "edit"]
                                },
                                "backorders": {
                                    "description": "If managing stock, this controls if backorders are allowed.",
                                    "type": "string",
                                    "default": "no",
                                    "enum": ["no", "notify", "yes"],
                                    "context": ["view", "edit"]
                                },
                                "backorders_allowed": {
                                    "description": "Shows if backorders are allowed.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "backordered": {
                                    "description": "Shows if the variation is on backordered.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "weight": {
                                    "description": "Variation weight (lbs).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "dimensions": {
                                    "description": "Variation dimensions.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "length": {
                                            "description": "Variation length (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "width": {
                                            "description": "Variation width (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "height": {
                                            "description": "Variation height (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "shipping_class": {
                                    "description": "Shipping class slug.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "shipping_class_id": {
                                    "description": "Shipping class ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "image": {
                                    "description": "Variation image data.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "id": {
                                            "description": "Image ID.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        },
                                        "date_created": {
                                            "description": "The date the image was created, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "date_modified": {
                                            "description": "The date the image was last modified, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "src": {
                                            "description": "Image URL.",
                                            "type": "string",
                                            "format": "uri",
                                            "context": ["view", "edit"]
                                        },
                                        "name": {
                                            "description": "Image name.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "alt": {
                                            "description": "Image alternative text.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "position": {
                                            "description": "Image position. 0 means that the image is featured.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "attributes": {
                                    "description": "List of attributes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Attribute ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "name": {
                                                "description": "Attribute name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "option": {
                                                "description": "Selected attribute term name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products"
            }
        },
        "\/wc\/v1\/products\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price.",
                        "type": "string"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price.",
                        "type": "string"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "download_type": {
                        "required": false,
                        "enum": ["standard"],
                        "description": "Download type, this controls the schema on the front-end.",
                        "type": "string"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of upsell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "object",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "variations": {
                        "required": false,
                        "description": "List of variations.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Variation ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created": {
                                    "description": "The date the variation was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the variation was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "permalink": {
                                    "description": "Variation URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Unique identifier.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "price": {
                                    "description": "Current variation price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "regular_price": {
                                    "description": "Variation regular price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "sale_price": {
                                    "description": "Variation sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_from": {
                                    "description": "Start date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_to": {
                                    "description": "End date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "on_sale": {
                                    "description": "Shows if the variation is on sale.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "purchasable": {
                                    "description": "Shows if the variation can be bought.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "visible": {
                                    "description": "If the variation is visible.",
                                    "type": "boolean",
                                    "context": ["view", "edit"]
                                },
                                "virtual": {
                                    "description": "If the variation is virtual.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloadable": {
                                    "description": "If the variation is downloadable.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloads": {
                                    "description": "List of downloadable files.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "File MD5 hash.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "name": {
                                                "description": "File name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "file": {
                                                "description": "File URL.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "download_limit": {
                                    "description": "Number of times downloadable files can be downloaded after purchase.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "download_expiry": {
                                    "description": "Number of days until access to downloadable files expires.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status.",
                                    "type": "string",
                                    "default": "taxable",
                                    "enum": ["taxable", "shipping", "none"],
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "manage_stock": {
                                    "description": "Stock management at variation level.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "stock_quantity": {
                                    "description": "Stock quantity.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "in_stock": {
                                    "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                                    "type": "boolean",
                                    "default": true,
                                    "context": ["view", "edit"]
                                },
                                "backorders": {
                                    "description": "If managing stock, this controls if backorders are allowed.",
                                    "type": "string",
                                    "default": "no",
                                    "enum": ["no", "notify", "yes"],
                                    "context": ["view", "edit"]
                                },
                                "backorders_allowed": {
                                    "description": "Shows if backorders are allowed.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "backordered": {
                                    "description": "Shows if the variation is on backordered.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "weight": {
                                    "description": "Variation weight (lbs).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "dimensions": {
                                    "description": "Variation dimensions.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "length": {
                                            "description": "Variation length (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "width": {
                                            "description": "Variation width (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "height": {
                                            "description": "Variation height (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "shipping_class": {
                                    "description": "Shipping class slug.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "shipping_class_id": {
                                    "description": "Shipping class ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "image": {
                                    "description": "Variation image data.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "id": {
                                            "description": "Image ID.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        },
                                        "date_created": {
                                            "description": "The date the image was created, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "date_modified": {
                                            "description": "The date the image was last modified, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "src": {
                                            "description": "Image URL.",
                                            "type": "string",
                                            "format": "uri",
                                            "context": ["view", "edit"]
                                        },
                                        "name": {
                                            "description": "Image name.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "alt": {
                                            "description": "Image alternative text.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "position": {
                                            "description": "Image position. 0 means that the image is featured.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "attributes": {
                                    "description": "List of attributes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Attribute ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "name": {
                                                "description": "Attribute name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "option": {
                                                "description": "Selected attribute term name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/products\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price.",
                        "type": "string"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price.",
                        "type": "string"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "download_type": {
                        "required": false,
                        "enum": ["standard"],
                        "description": "Download type, this controls the schema on the front-end.",
                        "type": "string"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of upsell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "object",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "variations": {
                        "required": false,
                        "description": "List of variations.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Variation ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created": {
                                    "description": "The date the variation was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the variation was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "permalink": {
                                    "description": "Variation URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "sku": {
                                    "description": "Unique identifier.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "price": {
                                    "description": "Current variation price.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "regular_price": {
                                    "description": "Variation regular price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "sale_price": {
                                    "description": "Variation sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_from": {
                                    "description": "Start date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "date_on_sale_to": {
                                    "description": "End date of sale price.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "on_sale": {
                                    "description": "Shows if the variation is on sale.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "purchasable": {
                                    "description": "Shows if the variation can be bought.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "visible": {
                                    "description": "If the variation is visible.",
                                    "type": "boolean",
                                    "context": ["view", "edit"]
                                },
                                "virtual": {
                                    "description": "If the variation is virtual.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloadable": {
                                    "description": "If the variation is downloadable.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "downloads": {
                                    "description": "List of downloadable files.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "File MD5 hash.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "name": {
                                                "description": "File name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "file": {
                                                "description": "File URL.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "download_limit": {
                                    "description": "Number of times downloadable files can be downloaded after purchase.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "download_expiry": {
                                    "description": "Number of days until access to downloadable files expires.",
                                    "type": "integer",
                                    "default": null,
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status.",
                                    "type": "string",
                                    "default": "taxable",
                                    "enum": ["taxable", "shipping", "none"],
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "manage_stock": {
                                    "description": "Stock management at variation level.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "stock_quantity": {
                                    "description": "Stock quantity.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "in_stock": {
                                    "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                                    "type": "boolean",
                                    "default": true,
                                    "context": ["view", "edit"]
                                },
                                "backorders": {
                                    "description": "If managing stock, this controls if backorders are allowed.",
                                    "type": "string",
                                    "default": "no",
                                    "enum": ["no", "notify", "yes"],
                                    "context": ["view", "edit"]
                                },
                                "backorders_allowed": {
                                    "description": "Shows if backorders are allowed.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "backordered": {
                                    "description": "Shows if the variation is on backordered.",
                                    "type": "boolean",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "weight": {
                                    "description": "Variation weight (lbs).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "dimensions": {
                                    "description": "Variation dimensions.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "length": {
                                            "description": "Variation length (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "width": {
                                            "description": "Variation width (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "height": {
                                            "description": "Variation height (in).",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "shipping_class": {
                                    "description": "Shipping class slug.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "shipping_class_id": {
                                    "description": "Shipping class ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "image": {
                                    "description": "Variation image data.",
                                    "type": "object",
                                    "context": ["view", "edit"],
                                    "properties": {
                                        "id": {
                                            "description": "Image ID.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        },
                                        "date_created": {
                                            "description": "The date the image was created, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "date_modified": {
                                            "description": "The date the image was last modified, in the site's timezone.",
                                            "type": "date-time",
                                            "context": ["view", "edit"],
                                            "readonly": true
                                        },
                                        "src": {
                                            "description": "Image URL.",
                                            "type": "string",
                                            "format": "uri",
                                            "context": ["view", "edit"]
                                        },
                                        "name": {
                                            "description": "Image name.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "alt": {
                                            "description": "Image alternative text.",
                                            "type": "string",
                                            "context": ["view", "edit"]
                                        },
                                        "position": {
                                            "description": "Image position. 0 means that the image is featured.",
                                            "type": "integer",
                                            "context": ["view", "edit"]
                                        }
                                    }
                                },
                                "attributes": {
                                    "description": "List of attributes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Attribute ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "name": {
                                                "description": "Attribute name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "option": {
                                                "description": "Selected attribute term name.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/products\/batch"
            }
        },
        "\/wc\/v1\/reports\/sales": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "period": {
                        "required": false,
                        "enum": ["week", "month", "last_month", "year"],
                        "description": "Report period.",
                        "type": "string"
                    },
                    "date_min": {
                        "required": false,
                        "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    },
                    "date_max": {
                        "required": false,
                        "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/reports\/sales"
            }
        },
        "\/wc\/v1\/reports\/top_sellers": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "period": {
                        "required": false,
                        "enum": ["week", "month", "last_month", "year"],
                        "description": "Report period.",
                        "type": "string"
                    },
                    "date_min": {
                        "required": false,
                        "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    },
                    "date_max": {
                        "required": false,
                        "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/reports\/top_sellers"
            }
        },
        "\/wc\/v1\/reports": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/reports"
            }
        },
        "\/wc\/v1\/taxes\/classes": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Tax class name.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/taxes\/classes"
            }
        },
        "\/wc\/v1\/taxes\/classes\/(?P<slug>\\w[\\w\\s\\-]*)": {
            "namespace": "wc\/v1",
            "methods": ["DELETE"],
            "endpoints": [{
                "methods": ["DELETE"],
                "args": {
                    "slug": {
                        "required": false,
                        "description": "Unique slug for the resource.",
                        "type": "string"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/taxes": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "order",
                        "enum": ["id", "order"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Sort by tax class.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "default": 1,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "default": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "default": true,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "default": "standard",
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/taxes"
            }
        },
        "\/wc\/v1\/taxes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/taxes\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/taxes\/batch"
            }
        },
        "\/wc\/v1\/webhooks\/(?P<webhook_id>[\\d]+)\/deliveries": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "webhook_id": {
                        "required": false,
                        "description": "Unique identifier for the webhook.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v1\/webhooks\/(?P<webhook_id>[\\d]+)\/deliveries\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "webhook_id": {
                        "required": false,
                        "description": "Unique identifier for the webhook.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v1\/webhooks": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "all",
                        "enum": ["all", "active", "paused", "disabled"],
                        "description": "Limit result set to webhooks assigned a specific status.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "active",
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": true,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    },
                    "delivery_url": {
                        "required": true,
                        "description": "Webhook delivery URL.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/webhooks"
            }
        },
        "\/wc\/v1\/webhooks\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v1",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": false,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v1\/webhooks\/batch": {
            "namespace": "wc\/v1",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": false,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v1\/webhooks\/batch"
            }
        },
        "\/wc\/v2": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wc\/v2"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2"
            }
        },
        "\/wc\/v2\/coupons": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "code": {
                        "required": false,
                        "description": "Limit result set to resources with a specific code.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "code": {
                        "required": true,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "default": "fixed_cart",
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "date_expires": {
                        "required": false,
                        "description": "The date the coupon expires, in the site's timezone.",
                        "type": "string"
                    },
                    "date_expires_gmt": {
                        "required": false,
                        "description": "The date the coupon expires, as GMT.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "default": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "default": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "default": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/coupons"
            }
        },
        "\/wc\/v2\/coupons\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "code": {
                        "required": false,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "date_expires": {
                        "required": false,
                        "description": "The date the coupon expires, in the site's timezone.",
                        "type": "string"
                    },
                    "date_expires_gmt": {
                        "required": false,
                        "description": "The date the coupon expires, as GMT.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/coupons\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "code": {
                        "required": false,
                        "description": "Coupon code.",
                        "type": "string"
                    },
                    "amount": {
                        "required": false,
                        "description": "The amount of discount. Should always be numeric, even if setting a percentage.",
                        "type": "string"
                    },
                    "discount_type": {
                        "required": false,
                        "enum": ["percent", "fixed_cart", "fixed_product"],
                        "description": "Determines the type of discount that will be applied.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Coupon description.",
                        "type": "string"
                    },
                    "date_expires": {
                        "required": false,
                        "description": "The date the coupon expires, in the site's timezone.",
                        "type": "string"
                    },
                    "date_expires_gmt": {
                        "required": false,
                        "description": "The date the coupon expires, as GMT.",
                        "type": "string"
                    },
                    "individual_use": {
                        "required": false,
                        "description": "If true, the coupon can only be used individually. Other applied coupons will be removed from the cart.",
                        "type": "boolean"
                    },
                    "product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon can be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_ids": {
                        "required": false,
                        "description": "List of product IDs the coupon cannot be used on.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "usage_limit": {
                        "required": false,
                        "description": "How many times the coupon can be used in total.",
                        "type": "integer"
                    },
                    "usage_limit_per_user": {
                        "required": false,
                        "description": "How many times the coupon can be used per customer.",
                        "type": "integer"
                    },
                    "limit_usage_to_x_items": {
                        "required": false,
                        "description": "Max number of items in the cart the coupon can be applied to.",
                        "type": "integer"
                    },
                    "free_shipping": {
                        "required": false,
                        "description": "If true and if the free shipping method requires a coupon, this coupon will enable free shipping.",
                        "type": "boolean"
                    },
                    "product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon applies to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "excluded_product_categories": {
                        "required": false,
                        "description": "List of category IDs the coupon does not apply to.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "exclude_sale_items": {
                        "required": false,
                        "description": "If true, this coupon will not be applied to items that have sale prices.",
                        "type": "boolean"
                    },
                    "minimum_amount": {
                        "required": false,
                        "description": "Minimum order amount that needs to be in the cart before coupon applies.",
                        "type": "string"
                    },
                    "maximum_amount": {
                        "required": false,
                        "description": "Maximum order amount allowed when using the coupon.",
                        "type": "string"
                    },
                    "email_restrictions": {
                        "required": false,
                        "description": "List of email addresses that can use this coupon.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/coupons\/batch"
            }
        },
        "\/wc\/v2\/customers\/(?P<customer_id>[\\d]+)\/downloads": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "customer_id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/customers": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Limit result set to resources with a specific email.",
                        "type": "string"
                    },
                    "role": {
                        "required": false,
                        "default": "customer",
                        "enum": ["all", "administrator", "editor", "author", "contributor", "subscriber", "customer", "shop_manager"],
                        "description": "Limit result set to resources with a specific role.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "email": {
                        "required": true,
                        "description": "New user email address.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "New user username.",
                        "type": "string"
                    },
                    "password": {
                        "required": true,
                        "description": "New user password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/customers"
            }
        },
        "\/wc\/v2\/customers\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the customer.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "Customer login name.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Customer password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": false,
                        "default": 0,
                        "description": "ID to reassign posts to.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v2\/customers\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "email": {
                        "required": false,
                        "description": "The email address for the customer.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "Customer first name.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Customer last name.",
                        "type": "string"
                    },
                    "username": {
                        "required": false,
                        "description": "Customer login name.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "Customer password.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "List of billing address data.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "List of shipping address data.",
                        "type": "object"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/customers\/batch"
            }
        },
        "\/wc\/v2\/orders\/(?P<order_id>[\\d]+)\/notes": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "customer", "internal"],
                        "description": "Limit result to customers or internal notes.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "note": {
                        "required": true,
                        "description": "Order note content.",
                        "type": "string"
                    },
                    "customer_note": {
                        "required": false,
                        "default": false,
                        "description": "If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/orders\/(?P<order_id>[\\d]+)\/notes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/orders\/(?P<order_id>[\\d]+)\/refunds": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to those of particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "dp": {
                        "required": false,
                        "default": 2,
                        "description": "Number of decimal points to use in each resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "amount": {
                        "required": false,
                        "description": "Refund amount.",
                        "type": "string"
                    },
                    "reason": {
                        "required": false,
                        "description": "Reason for refund.",
                        "type": "string"
                    },
                    "refunded_by": {
                        "required": false,
                        "description": "User ID of user who created the refund.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "api_refund": {
                        "required": false,
                        "default": true,
                        "description": "When true, the payment gateway API is used to generate the refund.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/orders\/(?P<order_id>[\\d]+)\/refunds\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "order_id": {
                        "required": false,
                        "description": "The order ID.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": true,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/orders": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to those of particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Limit result set to orders assigned a specific status.",
                        "type": "string"
                    },
                    "customer": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific customer.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to orders assigned a specific product.",
                        "type": "integer"
                    },
                    "dp": {
                        "required": false,
                        "default": 2,
                        "description": "Number of decimal points to use in each resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "default": "pending",
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "default": "USD",
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "default": 0,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "number",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "set_paid": {
                        "required": false,
                        "default": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/orders"
            }
        },
        "\/wc\/v2\/orders\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "number",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "set_paid": {
                        "required": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/orders\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "parent_id": {
                        "required": false,
                        "description": "Parent order ID.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "enum": ["pending", "processing", "on-hold", "completed", "cancelled", "refunded", "failed"],
                        "description": "Order status.",
                        "type": "string"
                    },
                    "currency": {
                        "required": false,
                        "enum": ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", "BTN", "BWP", "BYR", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "IRT", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PRB", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW"],
                        "description": "Currency the order was created with, in ISO format.",
                        "type": "string"
                    },
                    "customer_id": {
                        "required": false,
                        "description": "User ID who owns the order. 0 for guests.",
                        "type": "integer"
                    },
                    "customer_note": {
                        "required": false,
                        "description": "Note left by customer during checkout.",
                        "type": "string"
                    },
                    "billing": {
                        "required": false,
                        "description": "Billing address.",
                        "type": "object"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Shipping address.",
                        "type": "object"
                    },
                    "payment_method": {
                        "required": false,
                        "description": "Payment method ID.",
                        "type": "string"
                    },
                    "payment_method_title": {
                        "required": false,
                        "description": "Payment method title.",
                        "type": "string"
                    },
                    "transaction_id": {
                        "required": false,
                        "description": "Unique transaction ID.",
                        "type": "string"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "line_items": {
                        "required": false,
                        "description": "Line items data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Product name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "product_id": {
                                    "description": "Product ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "variation_id": {
                                    "description": "Variation ID, if applicable.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "quantity": {
                                    "description": "Quantity ordered.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of product.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal": {
                                    "description": "Line subtotal (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "subtotal_tax": {
                                    "description": "Line subtotal tax (before discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"]
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                },
                                "sku": {
                                    "description": "Product SKU.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "price": {
                                    "description": "Product price.",
                                    "type": "number",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "shipping_lines": {
                        "required": false,
                        "description": "Shipping lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "method_title": {
                                    "description": "Shipping method name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "method_id": {
                                    "description": "Shipping method ID.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "fee_lines": {
                        "required": false,
                        "description": "Fee lines data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "Fee name.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "tax_class": {
                                    "description": "Tax class of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "tax_status": {
                                    "description": "Tax status of fee.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "enum": ["taxable", "none"]
                                },
                                "total": {
                                    "description": "Line total (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "total_tax": {
                                    "description": "Line total tax (after discounts).",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "taxes": {
                                    "description": "Line taxes.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "readonly": true,
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Tax rate ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "total": {
                                                "description": "Tax total.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "subtotal": {
                                                "description": "Tax subtotal.",
                                                "type": "string",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            }
                                        }
                                    }
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "coupon_lines": {
                        "required": false,
                        "description": "Coupons line data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Item ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "code": {
                                    "description": "Coupon code.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                },
                                "discount": {
                                    "description": "Discount total.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "discount_tax": {
                                    "description": "Discount total tax.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "meta_data": {
                                    "description": "Meta data.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "description": "Meta ID.",
                                                "type": "integer",
                                                "context": ["view", "edit"],
                                                "readonly": true
                                            },
                                            "key": {
                                                "description": "Meta key.",
                                                "type": "string",
                                                "context": ["view", "edit"]
                                            },
                                            "value": {
                                                "description": "Meta value.",
                                                "type": "mixed",
                                                "context": ["view", "edit"]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "set_paid": {
                        "required": false,
                        "description": "Define if the order is paid. It will set the status to processing and reduce stock items.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/orders\/batch"
            }
        },
        "\/wc\/v2\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific parent.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Term name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/attributes\/(?P<attribute_id>[\\d]+)\/terms\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "attribute_id": {
                        "required": false,
                        "description": "Unique identifier for the attribute of the terms.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Term name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/attributes": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "select",
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "default": "menu_order",
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "default": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/attributes"
            }
        },
        "\/wc\/v2\/products\/attributes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Attribute name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": true,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/attributes\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Attribute name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["select"],
                        "description": "Type of attribute.",
                        "type": "string"
                    },
                    "order_by": {
                        "required": false,
                        "enum": ["menu_order", "name", "name_num", "id"],
                        "description": "Default sort order.",
                        "type": "string"
                    },
                    "has_archives": {
                        "required": false,
                        "description": "Enable\/Disable attribute archives.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/attributes\/batch"
            }
        },
        "\/wc\/v2\/products\/categories": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific parent.",
                        "type": "integer"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "default": "default",
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/categories"
            }
        },
        "\/wc\/v2\/products\/categories\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Category name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/categories\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Category name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the resource.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    },
                    "display": {
                        "required": false,
                        "enum": ["default", "products", "subcategories", "both"],
                        "description": "Category archive display type.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Image data.",
                        "type": "object"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort the resource.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/categories\/batch"
            }
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/reviews": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "review": {
                        "required": true,
                        "description": "Review content.",
                        "type": "string"
                    },
                    "date_created": {
                        "required": false,
                        "description": "The date the review was created, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_created_gmt": {
                        "required": false,
                        "description": "The date the review was created, as GMT.",
                        "type": "date-time"
                    },
                    "rating": {
                        "required": false,
                        "description": "Review rating (0 to 5).",
                        "type": "integer"
                    },
                    "name": {
                        "required": true,
                        "description": "Name of the reviewer.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "Email of the reviewer.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/reviews\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "review": {
                        "required": false,
                        "description": "The content of the review.",
                        "type": "string"
                    },
                    "date_created": {
                        "required": false,
                        "description": "The date the review was created, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_created_gmt": {
                        "required": false,
                        "description": "The date the review was created, as GMT.",
                        "type": "date-time"
                    },
                    "rating": {
                        "required": false,
                        "description": "Review rating (0 to 5).",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Reviewer name.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Reviewer email.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/reviews\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "review": {
                        "required": false,
                        "description": "The content of the review.",
                        "type": "string"
                    },
                    "date_created": {
                        "required": false,
                        "description": "The date the review was created, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_created_gmt": {
                        "required": false,
                        "description": "The date the review was created, as GMT.",
                        "type": "date-time"
                    },
                    "rating": {
                        "required": false,
                        "description": "Review rating (0 to 5).",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Reviewer name.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "Reviewer email.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/shipping_classes": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/shipping_classes"
            }
        },
        "\/wc\/v2\/products\/shipping_classes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Shipping class name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/shipping_classes\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Shipping class name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/shipping_classes\/batch"
            }
        },
        "\/wc\/v2\/products\/tags": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "term_group", "description", "count"],
                        "description": "Sort collection by resource attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide resources not assigned to any products.",
                        "type": "boolean"
                    },
                    "product": {
                        "required": false,
                        "description": "Limit result set to resources assigned to a specific product.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to resources with a specific slug.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Name for the resource.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/tags"
            }
        },
        "\/wc\/v2\/products\/tags\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Tag name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/tags\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Tag name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the resource unique to its type.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the resource.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/tags\/batch"
            }
        },
        "\/wc\/v2\/products": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to those of particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to products with a specific slug.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "draft", "pending", "private", "publish"],
                        "description": "Limit result set to products assigned a specific status.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Limit result set to products assigned a specific type.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Limit result set to products with specific SKU(s). Use commas to separate.",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Limit result set to featured products.",
                        "type": "boolean"
                    },
                    "category": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific category ID.",
                        "type": "string"
                    },
                    "tag": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific tag ID.",
                        "type": "string"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific shipping class ID.",
                        "type": "string"
                    },
                    "attribute": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute.",
                        "type": "string"
                    },
                    "attribute_term": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute term ID (required an assigned attribute).",
                        "type": "string"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Limit result set to products in stock or out of stock.",
                        "type": "boolean"
                    },
                    "on_sale": {
                        "required": false,
                        "description": "Limit result set to products on sale.",
                        "type": "boolean"
                    },
                    "min_price": {
                        "required": false,
                        "description": "Limit result set to products based on a minimum price.",
                        "type": "string"
                    },
                    "max_price": {
                        "required": false,
                        "description": "Limit result set to products based on a maximum price.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "simple",
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "default": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "default": "visible",
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "virtual": {
                        "required": false,
                        "default": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "default": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "default": -1,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "default": -1,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "default": "taxable",
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "default": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "default": true,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "default": "no",
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "default": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "default": true,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of up-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created_gmt": {
                                    "description": "The date the image was created, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified_gmt": {
                                    "description": "The date the image was last modified, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "grouped_products": {
                        "required": false,
                        "description": "List of grouped products ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products"
            }
        },
        "\/wc\/v2\/products\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of up-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created_gmt": {
                                    "description": "The date the image was created, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified_gmt": {
                                    "description": "The date the image was last modified, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "grouped_products": {
                        "required": false,
                        "description": "List of grouped products ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "Product name.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Product slug.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Product type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["draft", "pending", "private", "publish"],
                        "description": "Product status (post status).",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Featured product.",
                        "type": "boolean"
                    },
                    "catalog_visibility": {
                        "required": false,
                        "enum": ["visible", "catalog", "search", "hidden"],
                        "description": "Catalog visibility.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Product description.",
                        "type": "string"
                    },
                    "short_description": {
                        "required": false,
                        "description": "Product short description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Product regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Product sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the product is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the product is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "external_url": {
                        "required": false,
                        "description": "Product external URL. Only for external products.",
                        "type": "string"
                    },
                    "button_text": {
                        "required": false,
                        "description": "Product external button text. Only for external products.",
                        "type": "string"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at product level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the product is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "sold_individually": {
                        "required": false,
                        "description": "Allow one item to be bought in a single order.",
                        "type": "boolean"
                    },
                    "weight": {
                        "required": false,
                        "description": "Product weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Product dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "reviews_allowed": {
                        "required": false,
                        "description": "Allow reviews.",
                        "type": "boolean"
                    },
                    "upsell_ids": {
                        "required": false,
                        "description": "List of up-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "cross_sell_ids": {
                        "required": false,
                        "description": "List of cross-sell products IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_id": {
                        "required": false,
                        "description": "Product parent ID.",
                        "type": "integer"
                    },
                    "purchase_note": {
                        "required": false,
                        "description": "Optional note to send the customer after purchase.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "List of categories.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Category ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Category name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Category slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "List of tags.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Tag ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Tag name.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "slug": {
                                    "description": "Tag slug.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                }
                            }
                        }
                    },
                    "images": {
                        "required": false,
                        "description": "List of images.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Image ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "date_created": {
                                    "description": "The date the image was created, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_created_gmt": {
                                    "description": "The date the image was created, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified": {
                                    "description": "The date the image was last modified, in the site's timezone.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "date_modified_gmt": {
                                    "description": "The date the image was last modified, as GMT.",
                                    "type": "date-time",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "src": {
                                    "description": "Image URL.",
                                    "type": "string",
                                    "format": "uri",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Image name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "alt": {
                                    "description": "Image alternative text.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Image position. 0 means that the image is featured.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "position": {
                                    "description": "Attribute position.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "visible": {
                                    "description": "Define if the attribute is visible on the \"Additional information\" tab in the product's page.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "variation": {
                                    "description": "Define if the attribute can be used as variation.",
                                    "type": "boolean",
                                    "default": false,
                                    "context": ["view", "edit"]
                                },
                                "options": {
                                    "description": "List of available term names of the attribute.",
                                    "type": "array",
                                    "context": ["view", "edit"],
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "default_attributes": {
                        "required": false,
                        "description": "Defaults variation attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "grouped_products": {
                        "required": false,
                        "description": "List of grouped products ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/products\/batch"
            }
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/variations": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "include", "title", "slug"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to those of particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to products with a specific slug.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "any",
                        "enum": ["any", "draft", "pending", "private", "publish"],
                        "description": "Limit result set to products assigned a specific status.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["simple", "grouped", "external", "variable"],
                        "description": "Limit result set to products assigned a specific type.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Limit result set to products with specific SKU(s). Use commas to separate.",
                        "type": "string"
                    },
                    "featured": {
                        "required": false,
                        "description": "Limit result set to featured products.",
                        "type": "boolean"
                    },
                    "category": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific category ID.",
                        "type": "string"
                    },
                    "tag": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific tag ID.",
                        "type": "string"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Limit result set to products assigned a specific shipping class ID.",
                        "type": "string"
                    },
                    "attribute": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute.",
                        "type": "string"
                    },
                    "attribute_term": {
                        "required": false,
                        "description": "Limit result set to products with a specific attribute term ID (required an assigned attribute).",
                        "type": "string"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Limit result set to products in stock or out of stock.",
                        "type": "boolean"
                    },
                    "on_sale": {
                        "required": false,
                        "description": "Limit result set to products on sale.",
                        "type": "boolean"
                    },
                    "min_price": {
                        "required": false,
                        "description": "Limit result set to products based on a minimum price.",
                        "type": "string"
                    },
                    "max_price": {
                        "required": false,
                        "description": "Limit result set to products based on a maximum price.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Variation description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Variation regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Variation sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "visible": {
                        "required": false,
                        "default": true,
                        "description": "Define if the variation is visible on the product's page.",
                        "type": "boolean"
                    },
                    "virtual": {
                        "required": false,
                        "default": false,
                        "description": "If the variation is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "default": false,
                        "description": "If the variation is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "default": -1,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "default": -1,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "tax_status": {
                        "required": false,
                        "default": "taxable",
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "default": false,
                        "description": "Stock management at variation level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "default": true,
                        "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "default": "no",
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "weight": {
                        "required": false,
                        "description": "Variation weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Variation dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Variation image data.",
                        "type": "object"
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/variations\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Variation description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Variation regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Variation sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "visible": {
                        "required": false,
                        "description": "Define if the variation is visible on the product's page.",
                        "type": "boolean"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the variation is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the variation is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at variation level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "weight": {
                        "required": false,
                        "description": "Variation weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Variation dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Variation image data.",
                        "type": "object"
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the variation.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/products\/(?P<product_id>[\\d]+)\/variations\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "product_id": {
                        "required": false,
                        "description": "Unique identifier for the variable product.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "Variation description.",
                        "type": "string"
                    },
                    "sku": {
                        "required": false,
                        "description": "Unique identifier.",
                        "type": "string"
                    },
                    "regular_price": {
                        "required": false,
                        "description": "Variation regular price.",
                        "type": "string"
                    },
                    "sale_price": {
                        "required": false,
                        "description": "Variation sale price.",
                        "type": "string"
                    },
                    "date_on_sale_from": {
                        "required": false,
                        "description": "Start date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_from_gmt": {
                        "required": false,
                        "description": "Start date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "date_on_sale_to": {
                        "required": false,
                        "description": "End date of sale price, in the site's timezone.",
                        "type": "date-time"
                    },
                    "date_on_sale_to_gmt": {
                        "required": false,
                        "description": "End date of sale price, as GMT.",
                        "type": "date-time"
                    },
                    "visible": {
                        "required": false,
                        "description": "Define if the variation is visible on the product's page.",
                        "type": "boolean"
                    },
                    "virtual": {
                        "required": false,
                        "description": "If the variation is virtual.",
                        "type": "boolean"
                    },
                    "downloadable": {
                        "required": false,
                        "description": "If the variation is downloadable.",
                        "type": "boolean"
                    },
                    "downloads": {
                        "required": false,
                        "description": "List of downloadable files.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "File MD5 hash.",
                                    "type": "string",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "name": {
                                    "description": "File name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "file": {
                                    "description": "File URL.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "download_limit": {
                        "required": false,
                        "description": "Number of times downloadable files can be downloaded after purchase.",
                        "type": "integer"
                    },
                    "download_expiry": {
                        "required": false,
                        "description": "Number of days until access to downloadable files expires.",
                        "type": "integer"
                    },
                    "tax_status": {
                        "required": false,
                        "enum": ["taxable", "shipping", "none"],
                        "description": "Tax status.",
                        "type": "string"
                    },
                    "tax_class": {
                        "required": false,
                        "description": "Tax class.",
                        "type": "string"
                    },
                    "manage_stock": {
                        "required": false,
                        "description": "Stock management at variation level.",
                        "type": "boolean"
                    },
                    "stock_quantity": {
                        "required": false,
                        "description": "Stock quantity.",
                        "type": "integer"
                    },
                    "in_stock": {
                        "required": false,
                        "description": "Controls whether or not the variation is listed as \"in stock\" or \"out of stock\" on the frontend.",
                        "type": "boolean"
                    },
                    "backorders": {
                        "required": false,
                        "enum": ["no", "notify", "yes"],
                        "description": "If managing stock, this controls if backorders are allowed.",
                        "type": "string"
                    },
                    "weight": {
                        "required": false,
                        "description": "Variation weight (lbs).",
                        "type": "string"
                    },
                    "dimensions": {
                        "required": false,
                        "description": "Variation dimensions.",
                        "type": "object"
                    },
                    "shipping_class": {
                        "required": false,
                        "description": "Shipping class slug.",
                        "type": "string"
                    },
                    "image": {
                        "required": false,
                        "description": "Variation image data.",
                        "type": "object"
                    },
                    "attributes": {
                        "required": false,
                        "description": "List of attributes.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Attribute ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"]
                                },
                                "name": {
                                    "description": "Attribute name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "option": {
                                    "description": "Selected attribute term name.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Menu order, used to custom sort products.",
                        "type": "integer"
                    },
                    "meta_data": {
                        "required": false,
                        "description": "Meta data.",
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "description": "Meta ID.",
                                    "type": "integer",
                                    "context": ["view", "edit"],
                                    "readonly": true
                                },
                                "key": {
                                    "description": "Meta key.",
                                    "type": "string",
                                    "context": ["view", "edit"]
                                },
                                "value": {
                                    "description": "Meta value.",
                                    "type": "mixed",
                                    "context": ["view", "edit"]
                                }
                            }
                        }
                    }
                }
            }]
        },
        "\/wc\/v2\/reports\/sales": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "period": {
                        "required": false,
                        "enum": ["week", "month", "last_month", "year"],
                        "description": "Report period.",
                        "type": "string"
                    },
                    "date_min": {
                        "required": false,
                        "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    },
                    "date_max": {
                        "required": false,
                        "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/reports\/sales"
            }
        },
        "\/wc\/v2\/reports\/top_sellers": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "period": {
                        "required": false,
                        "enum": ["week", "month", "last_month", "year"],
                        "description": "Report period.",
                        "type": "string"
                    },
                    "date_min": {
                        "required": false,
                        "description": "Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    },
                    "date_max": {
                        "required": false,
                        "description": "Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/reports\/top_sellers"
            }
        },
        "\/wc\/v2\/reports": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/reports"
            }
        },
        "\/wc\/v2\/settings": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/settings"
            }
        },
        "\/wc\/v2\/settings\/(?P<group_id>[\\w-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "group": {
                        "required": false,
                        "description": "Settings group ID.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/settings\/(?P<group_id>[\\w-]+)\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "group": {
                        "required": false,
                        "description": "Settings group ID.",
                        "type": "string"
                    },
                    "value": {
                        "required": false,
                        "description": "Setting value.",
                        "type": "mixed"
                    }
                }
            }]
        },
        "\/wc\/v2\/settings\/(?P<group_id>[\\w-]+)\/(?P<id>[\\w-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "group": {
                        "required": false,
                        "description": "Settings group ID.",
                        "type": "string"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "group": {
                        "required": false,
                        "description": "Settings group ID.",
                        "type": "string"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    },
                    "value": {
                        "required": false,
                        "description": "Setting value.",
                        "type": "mixed"
                    }
                }
            }]
        },
        "\/wc\/v2\/shipping\/zones": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Shipping zone name.",
                        "type": "string"
                    },
                    "order": {
                        "required": false,
                        "description": "Shipping zone order.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/shipping\/zones"
            }
        },
        "\/wc\/v2\/shipping\/zones\/(?P<id>[\\d-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique ID for the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique ID for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "Shipping zone name.",
                        "type": "string"
                    },
                    "order": {
                        "required": false,
                        "description": "Shipping zone order.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique ID for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/shipping\/zones\/(?P<id>[\\d]+)\/locations": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique ID for the resource.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique ID for the resource.",
                        "type": "integer"
                    },
                    "code": {
                        "required": false,
                        "description": "Shipping zone location code.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "enum": ["postcode", "state", "country", "continent"],
                        "description": "Shipping zone location type.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/shipping\/zones\/(?P<zone_id>[\\d]+)\/methods": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "zone_id": {
                        "required": false,
                        "description": "Unique ID for the zone.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "zone_id": {
                        "required": false,
                        "description": "Unique ID for the zone.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "description": "Shipping method sort order.",
                        "type": "integer"
                    },
                    "enabled": {
                        "required": false,
                        "description": "Shipping method enabled status.",
                        "type": "boolean"
                    },
                    "settings": {
                        "required": false,
                        "description": "Shipping method settings.",
                        "type": "object"
                    },
                    "method_id": {
                        "required": true,
                        "description": "Shipping method ID."
                    }
                }
            }]
        },
        "\/wc\/v2\/shipping\/zones\/(?P<zone_id>[\\d]+)\/methods\/(?P<instance_id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "zone_id": {
                        "required": false,
                        "description": "Unique ID for the zone.",
                        "type": "integer"
                    },
                    "instance_id": {
                        "required": false,
                        "description": "Unique ID for the instance.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "zone_id": {
                        "required": false,
                        "description": "Unique ID for the zone.",
                        "type": "integer"
                    },
                    "instance_id": {
                        "required": false,
                        "description": "Unique ID for the instance.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "description": "Shipping method sort order.",
                        "type": "integer"
                    },
                    "enabled": {
                        "required": false,
                        "description": "Shipping method enabled status.",
                        "type": "boolean"
                    },
                    "settings": {
                        "required": false,
                        "description": "Shipping method settings.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "zone_id": {
                        "required": false,
                        "description": "Unique ID for the zone.",
                        "type": "integer"
                    },
                    "instance_id": {
                        "required": false,
                        "description": "Unique ID for the instance.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/taxes\/classes": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": true,
                        "description": "Tax class name.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/taxes\/classes"
            }
        },
        "\/wc\/v2\/taxes\/classes\/(?P<slug>\\w[\\w\\s\\-]*)": {
            "namespace": "wc\/v2",
            "methods": ["DELETE"],
            "endpoints": [{
                "methods": ["DELETE"],
                "args": {
                    "slug": {
                        "required": false,
                        "description": "Unique slug for the resource.",
                        "type": "string"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/taxes": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "order",
                        "enum": ["id", "order"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Sort by tax class.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "default": 1,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "default": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "default": true,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "default": "standard",
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/taxes"
            }
        },
        "\/wc\/v2\/taxes\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/taxes\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "country": {
                        "required": false,
                        "description": "Country ISO 3166 code.",
                        "type": "string"
                    },
                    "state": {
                        "required": false,
                        "description": "State code.",
                        "type": "string"
                    },
                    "postcode": {
                        "required": false,
                        "description": "Postcode \/ ZIP.",
                        "type": "string"
                    },
                    "city": {
                        "required": false,
                        "description": "City name.",
                        "type": "string"
                    },
                    "rate": {
                        "required": false,
                        "description": "Tax rate.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tax rate name.",
                        "type": "string"
                    },
                    "priority": {
                        "required": false,
                        "description": "Tax priority.",
                        "type": "integer"
                    },
                    "compound": {
                        "required": false,
                        "description": "Whether or not this is a compound rate.",
                        "type": "boolean"
                    },
                    "shipping": {
                        "required": false,
                        "description": "Whether or not this tax rate also gets applied to shipping.",
                        "type": "boolean"
                    },
                    "order": {
                        "required": false,
                        "description": "Indicates the order that will appear in queries.",
                        "type": "integer"
                    },
                    "class": {
                        "required": false,
                        "enum": ["standard", "reduced-rate", "zero-rate"],
                        "description": "Tax class.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/taxes\/batch"
            }
        },
        "\/wc\/v2\/webhooks\/(?P<webhook_id>[\\d]+)\/deliveries": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "webhook_id": {
                        "required": false,
                        "description": "Unique identifier for the webhook.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/webhooks\/(?P<webhook_id>[\\d]+)\/deliveries\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "webhook_id": {
                        "required": false,
                        "description": "Unique identifier for the webhook.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/webhooks": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to resources published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to resources published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific ids.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["date", "id", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "all",
                        "enum": ["all", "active", "paused", "disabled"],
                        "description": "Limit result set to webhooks assigned a specific status.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "default": "active",
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": true,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    },
                    "delivery_url": {
                        "required": true,
                        "description": "Webhook delivery URL.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/webhooks"
            }
        },
        "\/wc\/v2\/webhooks\/(?P<id>[\\d]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": false,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as resource does not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wc\/v2\/webhooks\/batch": {
            "namespace": "wc\/v2",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "name": {
                        "required": false,
                        "description": "A friendly name for the webhook.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["active", "paused", "disabled"],
                        "description": "Webhook status.",
                        "type": "string"
                    },
                    "topic": {
                        "required": false,
                        "description": "Webhook topic.",
                        "type": "string"
                    },
                    "secret": {
                        "required": false,
                        "description": "Secret key used to generate a hash of the delivered webhook and provided in the request headers. This will default to a MD5 hash from the current user's ID|username if not provided.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/webhooks\/batch"
            }
        },
        "\/wc\/v2\/system_status": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/system_status"
            }
        },
        "\/wc\/v2\/system_status\/tools": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/system_status\/tools"
            }
        },
        "\/wc\/v2\/system_status\/tools\/(?P<id>[\\w-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "A unique identifier for the tool.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Tool name.",
                        "type": "string"
                    },
                    "action": {
                        "required": false,
                        "description": "What running the tool will do.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Tool description.",
                        "type": "string"
                    },
                    "success": {
                        "required": false,
                        "description": "Did the tool run successfully?",
                        "type": "boolean"
                    },
                    "message": {
                        "required": false,
                        "description": "Tool return message.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/shipping_methods": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/shipping_methods"
            }
        },
        "\/wc\/v2\/shipping_methods\/(?P<id>[\\w-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wc\/v2\/payment_gateways": {
            "namespace": "wc\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wc\/v2\/payment_gateways"
            }
        },
        "\/wc\/v2\/payment_gateways\/(?P<id>[\\w-]+)": {
            "namespace": "wc\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the resource.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "Payment gateway title on checkout.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Payment gateway description on checkout.",
                        "type": "string"
                    },
                    "order": {
                        "required": false,
                        "description": "Payment gateway sort order.",
                        "type": "integer"
                    },
                    "enabled": {
                        "required": false,
                        "description": "Payment gateway enabled status.",
                        "type": "boolean"
                    },
                    "settings": {
                        "required": false,
                        "description": "Payment gateway settings.",
                        "type": "object"
                    }
                }
            }]
        },
        "\/wp\/v2": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wp\/v2"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2"
            }
        },
        "\/wp\/v2\/posts": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sticky": {
                        "required": false,
                        "description": "Limit result set to items that are sticky.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "The format for the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Whether or not the object should be treated as sticky.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/posts"
            }
        },
        "\/wp\/v2\/posts\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "The format for the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "Whether or not the object should be treated as sticky.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "The terms assigned to the object in the category taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "The terms assigned to the object in the post_tag taxonomy.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as revisions do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "Limit result set to posts with a specific menu_order value.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title", "menu_order"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "The order of the object in relation to other object of its type.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/pages"
            }
        },
        "\/wp\/v2\/pages\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "The order of the object in relation to other object of its type.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as revisions do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/media": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes posts assigned to specific authors.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to items with particular parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to all items except those of a particular parent ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "inherit",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["inherit", "private", "trash"],
                            "type": "string"
                        }
                    },
                    "media_type": {
                        "required": false,
                        "enum": ["image", "video", "text", "application", "audio"],
                        "description": "Limit result set to attachments of a particular media type.",
                        "type": "string"
                    },
                    "mime_type": {
                        "required": false,
                        "description": "Limit result set to attachments of a particular MIME type.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Alternative text to display when attachment is not displayed.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "The attachment caption.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "The attachment description.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID for the associated post of the attachment.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/media"
            }
        },
        "\/wp\/v2\/media\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID for the author of the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "Alternative text to display when attachment is not displayed.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "The attachment caption.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "The attachment description.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID for the associated post of the attachment.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/product": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to posts published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to posts published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to posts with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "Limit result set to posts assigned one or more statuses.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/product"
            }
        },
        "\/wp\/v2\/product\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the object unique to its type.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "wc-pending", "wc-processing", "wc-on-hold", "wc-completed", "wc-cancelled", "wc-refunded", "wc-failed"],
                        "description": "A named status for the object.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "A password to protect access to the content and excerpt.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "The title for the object.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "The excerpt for the object.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "The ID of the featured media for the object.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not comments are open on the object.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Whether or not the object can be pinged.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "The theme file to use to display the object.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/types": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/types"
            }
        },
        "\/wp\/v2\/types\/(?P<type>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "type": {
                        "required": false,
                        "description": "An alphanumeric identifier for the post type.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/statuses": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/statuses"
            }
        },
        "\/wp\/v2\/statuses\/(?P<status>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "status": {
                        "required": false,
                        "description": "An alphanumeric identifier for the status.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/taxonomies": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "description": "Limit results to taxonomies associated with a specific post type.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/taxonomies"
            }
        },
        "\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "taxonomy": {
                        "required": false,
                        "description": "An alphanumeric identifier for the taxonomy.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/categories": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
                        "description": "Sort collection by term attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide terms not assigned to any posts.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific parent.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific post.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to terms with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The parent term ID.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/categories"
            }
        },
        "\/wp\/v2\/categories\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The parent term ID.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as terms do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/tags": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
                        "description": "Sort collection by term attribute.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "Whether to hide terms not assigned to any posts.",
                        "type": "boolean"
                    },
                    "post": {
                        "required": false,
                        "description": "Limit result set to terms assigned to a specific post.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to terms with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/tags"
            }
        },
        "\/wp\/v2\/tags\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML description of the term.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML title for the term.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the term unique to its type.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the term.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as terms do not support trashing.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/users": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date", "slug", "include_slugs", "email", "url"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "Limit result set to users with one or more specific slugs.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "roles": {
                        "required": false,
                        "description": "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "username": {
                        "required": true,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": true,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/users"
            }
        },
        "\/wp\/v2\/users\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "username": {
                        "required": false,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the user.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as users do not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reassign the deleted user's posts and links to this user ID.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wp\/v2\/users\/me": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "username": {
                        "required": false,
                        "description": "Login name for the user.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "Display name for the user.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "First name for the user.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "Last name for the user.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "The email address for the user.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL of the user.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Description of the user.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US"],
                        "description": "Locale for the user.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "The nickname for the user.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "An alphanumeric identifier for the user.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "Roles assigned to the user.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "Password for the user (never included).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Required to be true, as users do not support trashing.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "Reassign the deleted user's posts and links to this user ID.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/users\/me"
            }
        },
        "\/wp\/v2\/comments": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "Current page of the collection.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "Maximum number of items to be returned in result set.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "Limit results to those matching a string.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "Limit response to comments published after a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "description": "Limit result set to comments assigned to specific user IDs. Requires authorization.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "description": "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_email": {
                        "required": false,
                        "description": "Limit result set to that from a specific author email. Requires authorization.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "Limit response to comments published before a given ISO8601 compliant date.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to specific IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "Offset the result set by a specific number of items.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "Order sort attribute ascending or descending.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date_gmt",
                        "enum": ["date", "date_gmt", "id", "include", "post", "parent", "type"],
                        "description": "Sort collection by object attribute.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to comments of specific parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "Ensure result set excludes specific parent IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "post": {
                        "required": false,
                        "default": [],
                        "description": "Limit result set to comments assigned to specific post IDs.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "approve",
                        "description": "Limit result set to comments assigned a specific status. Requires authorization.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "comment",
                        "description": "Limit result set to comments assigned a specific type. Requires authorization.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the post if it is password protected.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "author": {
                        "required": false,
                        "description": "The ID of the user object, if author was a user.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Email address for the object author.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP address for the object author.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Display name for the object author.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL for the object author.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent for the object author.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": 0,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "default": 0,
                        "description": "The ID of the associated post object.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "State of the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/comments"
            }
        },
        "\/wp\/v2\/comments\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "Scope under which the request is made; determines fields present in response.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the parent post of the comment (if the post is password protected).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "author": {
                        "required": false,
                        "description": "The ID of the user object, if author was a user.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "Email address for the object author.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP address for the object author.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "Display name for the object author.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL for the object author.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "User agent for the object author.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "The content for the object.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "The date the object was published, in the site's timezone.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "The date the object was published, as GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "The ID for the parent of the object.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "The ID of the associated post object.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "State of the object.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "Meta fields.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "Unique identifier for the object.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "Whether to bypass trash and force deletion.",
                        "type": "boolean"
                    },
                    "password": {
                        "required": false,
                        "description": "The password for the parent post of the comment (if the post is password protected).",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/settings": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "title": {
                        "required": false,
                        "description": "Site title.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "Site tagline.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "Site URL.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "This address is used for admin purposes, like new user notification.",
                        "type": "string"
                    },
                    "timezone": {
                        "required": false,
                        "description": "A city in the same timezone as you.",
                        "type": "string"
                    },
                    "date_format": {
                        "required": false,
                        "description": "A date format for all date strings.",
                        "type": "string"
                    },
                    "time_format": {
                        "required": false,
                        "description": "A time format for all time strings.",
                        "type": "string"
                    },
                    "start_of_week": {
                        "required": false,
                        "description": "A day number of the week that the week should start on.",
                        "type": "integer"
                    },
                    "language": {
                        "required": false,
                        "description": "WordPress locale code.",
                        "type": "string"
                    },
                    "use_smilies": {
                        "required": false,
                        "description": "Convert emoticons like :-) and :-P to graphics on display.",
                        "type": "boolean"
                    },
                    "default_category": {
                        "required": false,
                        "description": "Default post category.",
                        "type": "integer"
                    },
                    "default_post_format": {
                        "required": false,
                        "description": "Default post format.",
                        "type": "string"
                    },
                    "posts_per_page": {
                        "required": false,
                        "description": "Blog pages show at most.",
                        "type": "integer"
                    },
                    "default_ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
                        "type": "string"
                    },
                    "default_comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "Allow people to post comments on new articles.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/themenectar.com\/demo\/salient-business\/wp-json\/wp\/v2\/settings"
            }
        }
    },
    "_links": {
        "help": [{
            "href": "http:\/\/v2.wp-api.org\/"
        }]
    }
}