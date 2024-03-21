let listId = []; // Danh sách id
        let newItem = 1; // Tạo id mới
        
        function add() {
            
            newItem++;
            const itemId = "SP_" + newItem; // Tạo id mới
            const divs = document.createElement("div");
            divs.id = itemId;

            const label = document.createElement("label");
            label.innerText = itemId;
            divs.appendChild(label);

            const input1 = document.createElement("input");
            divs.appendChild(input1);

            const input2 = document.createElement("input");
            divs.appendChild(input2);

            const input3 = document.createElement("input");
            divs.appendChild(input3);

            const button = document.createElement("button");
            button.type = "button";
            button.addEventListener("click", add);
            divs.appendChild(button);

            const icon = document.createElement("i");
            icon.classList.add("fa-solid", "fa-plus");
            button.appendChild(icon);

            const button1 = document.createElement("button");
            button1.type = "button";
            button1.addEventListener("click", removeItem);
            divs.appendChild(button1);

            const icon1 = document.createElement("i");
            icon1.classList.add("fa-solid", "fa-trash");
            button1.appendChild(icon1);

            const listItem = document.createElement("div");
            listItem.className = "style";
            listItem.appendChild(divs);

            document.getElementById("myDiv").appendChild(listItem);

            // Thêm id mới vào danh sách
            listId.push(itemId);
        }

        function removeItem() {
            const parentDiv = this.parentElement;
const listItem = parentDiv.parentElement;

            const divId = parentDiv.id;
            const idIndex = listId.indexOf(divId);

            if (idIndex !== -1) {
                // Xóa id khỏi danh sách
                listId.splice(idIndex, 1);
            }

            // Xóa phần tử
            listItem.removeChild(parentDiv);
        }