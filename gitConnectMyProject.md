## How we can conect our new devise to git hub? 

1.ssh-keygen -t ed25519 -C "your-email@example.com"
2.eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
3.cat ~/.ssh/id_ed25519.pub