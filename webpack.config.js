// 引入一个包
const path =require('path');
// 引入html插件
const HTMLWebpackPlugin =require('html-webpack-plugin'); 
// 引入clean插件
const {CleanWebpackPlugin} =require('clean-webpack-plugin');

//配置webpack
module.exports = {
    mode:"production",
    //指定文件路口
    entry:"./src/index.ts",
    //指定打包文件所在目录
    output:{
        //指定目录
        path:path.resolve(__dirname,'dist'),
        // 打包后的文件名
        filename:"bundle.js",
        /* 配置打包环境
         environment:{
             arrowFunction:false, //不使用箭头函数
             const:false, //不使用const函数
         } */
    },
    // 指定webpack打包时使用的模块
    module:{
        // 指定加载的规则
        rules:[
            {
                // 指定生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:[
                    //设置babel
                    {
                        //指定加载器
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            //设置预定的环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        targets:{
                                            //兼容目标浏览器版本
                                            "chrome":"88",
                                            // "ie":"11"
                                        },
                                        //兼容corejs版本（自动引用当前版本没有的代码）
                                        "corejs":"3",
                                        //使用corejs的方式，表示按需加装
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude:/node-modules/
            },
   
            {// 设置less文件处理
                test:/\.less$/,
                // 从下往上执行
                use:[
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin(
            {
                // 自定义html模板文件
                template: "./src/index.html",
            }
        )
            

    ],

    resolve:{
        // 能导入的模块（import）
        extensions:[".js",".json",".ts",".tsx"],
    },

        
    
}