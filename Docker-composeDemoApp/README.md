for run docker compose file run command-  docker-compose up --build


curl http://localhost:3000/orders for check order service is working or not
curl http://localhost:3001/products for check product service is working or not


# 🚀 Docker Interactive Project

This project demonstrates how to run a Node.js application inside a Docker container in two modes:

1. **Regular Mode** → Runs a simple Express server.
2. **Interactive Mode** → Launches an interactive shell where users can manually execute commands.

---

## 📂 Project Structure

```
docker-interactive-project/
│── Dockerfile
│── .dockerignore
│── package.json
│── package-lock.json
│── index.js        # Regular mode (Express server)
│── interactive.js  # Interactive mode (User commands)
│── data.json       # Sample data
```

---

## 🛠️ Setup & Installation

### **1️⃣ Build the Docker Image**

```sh
docker build -t interactive-app .
```

### **2️⃣ Run the Container in Regular Mode (Server)**

```sh
docker run -p 3000:3000 --name interactive_app interactive-app
```

- Open [http://localhost:3000](http://localhost:3000) to verify the server is running.

### **3️⃣ Run in Interactive Mode (Temporary Container)**

```sh
docker run -it --rm interactive-app node interactive.js
```

- Enter `show` to display data or `exit` to quit.
- `--rm` ensures the container is removed after exiting.

### **4️⃣ Run Interactive Mode Inside a Running Container**

```sh
docker exec -it interactive_app node interactive.js
```

- This allows interaction with the already running container.

### **5️⃣ Stop and Remove the Container**

```sh
docker stop interactive_app
```

```sh
docker rm interactive_app
```

---

## 🎯 Expected Interactive Mode Output

```
$ docker run -it --rm interactive-app node interactive.js
Welcome to interactive mode!
Enter 'show' to display data or 'exit' to quit: show
Data: { users: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ] }
Enter 'show' to display data or 'exit' to quit: exit
Exiting interactive mode...
```

---

## 📌 Key Features

✅ Runs a **Node.js server** in Docker.\
✅ Supports **interactive mode** for manual execution.\
✅ **Works without Docker Compose.**\
✅ **Auto-cleans** interactive containers using `--rm`.

---

## 🏆 Conclusion

This project demonstrates how to create a simple Dockerized Node.js application that runs both in **server mode** and **interactive mode**, without using Docker Compose. 🎉

Let me know if you need modifications! 🚀
