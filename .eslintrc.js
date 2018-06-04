module.exports = {
    "plugins": ["prettier", "standard"],
    "extends": [
        "prettier",
        "standard",
        "plugin:react/recommended",
        // "prettier/react",
        // "prettier/standard"
    ],
    "rules":{
        "react/prop-types": 0,
        "prettier/prettier": "error",
        "semi": [2, "never"]
    },  
    "globals": {
        "graphql": true
    }
};