document.addEventListener('DOMContentLoaded', function() {
    // 设置倒计时的目标日期（从当前时间起2天后）
    const countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);

    // 进度条动画
    let progressValue = 0; // 进度值初始化为 0
    const progressBar = document.getElementById('progress-bar'); // 获取进度条元素
    const progressPercentage = document.getElementById('progress-percentage'); // 获取显示进度百分比的元素

    // 目标进度值：在 30% 到 70% 之间随机取一个整数
    const targetProgress = Math.floor(Math.random() * 40) + 30;

    // 逐步增加进度条的宽度，模拟加载动画
    const progressInterval = setInterval(() => {
        if (progressValue >= targetProgress) {
            clearInterval(progressInterval); // 达到目标进度时停止动画
        } else {
            progressValue++; // 每次递增 1%
            progressBar.style.width = progressValue + '%'; // 更新进度条宽度
            progressPercentage.textContent = progressValue; // 更新文本显示的进度百分比
        }
    }, 50); // 每 50 毫秒更新一次

    // 每秒更新倒计时
    const countdown = setInterval(function() {
        const now = new Date().getTime(); // 获取当前时间戳（毫秒）
        const distance = countDownDate.getTime() - now; // 计算剩余时间

        // 计算剩余的天、小时、分钟和秒
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 显示倒计时，并保证个位数前面补零
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

        // 如果倒计时结束，显示完成状态
        if (distance < 0) {
            clearInterval(countdown); // 停止倒计时
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";

            // 进度条补全至 100%
            const completeProgress = setInterval(() => {
                if (progressValue >= 100) {
                    clearInterval(completeProgress); // 进度条到 100% 后停止
                } else {
                    progressValue++;
                    progressBar.style.width = progressValue + '%';
                    progressPercentage.textContent = progressValue;
                }
            }, 20); // 以更快的速度填充进度条
        }
    }, 1000); // 每 1 秒执行一次

    // 背景动画 - 细微的光亮跟随效果
    const decoration = document.querySelector('.decoration'); // 选择具有装饰效果的元素

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth; // 计算鼠标位置相对于窗口的宽度比例
        const y = e.clientY / window.innerHeight; // 计算鼠标位置相对于窗口的高度比例

        // 根据鼠标位置偏移装饰元素的位置
        decoration.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });
});
