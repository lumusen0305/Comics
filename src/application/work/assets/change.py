import cv2 
import numpy as np
file="preview_3.png"
# 讀取圖片
img = cv2.imread(file)

# 修改大小
img = cv2.resize(img, (1800, 900))  # 將大小修改成250*250

# 儲存圖片
cv2.imwrite(file, img)
