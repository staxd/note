 //加入正则 人数1-100正整数
    const limitDecimals = (value: string | number): string => {
        const reg = /^(\-)*(\d+)\.*$/;
        if(value > 100){
            return 100
        }
        if(typeof value === 'string') {
            return !isNaN(Number(value)) ? value.replace(reg, '$1$2') : ''
        } else if (typeof value === 'number') {
            return !isNaN(value) ? String(value).replace(reg, '$1$2') : ''
        } else {
            return ''
        }
    };
<InputNumber min={1} max={100} formatter={limitDecimals} parser={limitDecimals}  />
//input框 禁止输入空格
<Form.Item label="名字">
    {getFieldDecorator('name', {
      rules: [
        {
          required: true,
          message: '请输入名字',
        },
        // 方式一：正则匹配（提示错误，阻止表单提交）
        {
          pattern: /^[^\s]*$/,
          message: '禁止输入空格',
        }
      ],
      // 方式二：粗暴点<Input>不允许输入空格(其实是将e.tartget.value转成控件自己的值)
      // 这个方法的用途非常强大，还可以结合upload做一些文件上传之后的回调处理
      getValueFromEvent: (event) => {
        return event.target.value.replace(/\s+/g,"")
      },
    })(<Input size="large" placeholder="请输入名字" maxLength={20} />)}
</Form.Item>